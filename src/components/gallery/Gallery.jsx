import React, { useState } from "react";
import { m } from 'framer-motion';

// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Card, CardActionArea, CardMedia, Typography, Grid, Dialog, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PHOTOS } from '../../dummydata';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(0, 0, 10, 0),
  },
}));

// -----------------------------------------------------------------------
export default function ListPhotos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (item) => {
    setSelectedImage(item);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <RootStyle>
      <Container>
        <Stack component={m.div} spacing={3} textAlign="justify" py={10}>
          <Typography variant="h2" sx={{ color: '#951616fc', textAlign: "center" }}>
            Photos de l'évènement
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>Découvrez Lomé et la conférence en images</Typography>
          <Grid container spacing={2} py={5}>
            {PHOTOS.map((item) => (
              <Grid item key={item.title} px={2} py={3} xs={12}  md={4} xl={3}>
                <Card sx={{ borderRadius: 0 }} >
                  <CardActionArea onClick={() => handleClick(item)}>
                    <CardMedia
                      height="300"
                      component="img"
                      image={item.image}
                    />
                    <Typography sx={{ textAlign: 'center', py: 2, color: "#000", height: "100px" }}>
                      {item.title}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

         {selectedImage &&  <Slider selectedImage={selectedImage} handleClose={handleClose}  />}
        </Stack>


      </Container>
    </RootStyle>
  )
}

const Slider= ({ selectedImage, handleClose  }) =>{
  const [current, setCurrent] = useState(selectedImage);
  const selectedPosition = React.useMemo(() => PHOTOS.findIndex((one) => one === current ), [current]);

  const handleNext = () => {
    setCurrent(PHOTOS[selectedPosition+1])
  }

  const handlePrev = () =>{
    setCurrent(PHOTOS[selectedPosition-1])
  }


  return (
        <Dialog fullWidth maxWidth='md' open={Boolean(current)} onClose={handleClose}>
            <Stack position="relative" sx={{ overflow: 'hidden', width: 1, height: 0.5}}>
              <Stack position="absolute" top={0} bottom={0} height={1} alignItems='center' justifyContent='center'>
                <IconButton onClick={handlePrev} disabled={selectedPosition === 0}>
                  <ArrowBackIosIcon fontSize='large' sx={{ color:"white" }} />
                </IconButton>
              </Stack>
              <Stack>
                {current && (
                  <img
                    src={current.image}
                    alt={current.title}
                    style={{ maxWidth: "100%", maxHeight: "100%", overflow: "hidden" }}
                  />
                )}
              </Stack>
              <Stack position="absolute" top={0} bottom={0} height={1} right={0} alignItems='center' justifyContent='center'>
                  <IconButton onClick={handleNext}  disabled={selectedPosition === PHOTOS.length} >
                    <ArrowForwardIosIcon fontSize='large' sx={{ color:"white" }} />
                  </IconButton>
              </Stack>
            </Stack>
          </Dialog>
  );
}