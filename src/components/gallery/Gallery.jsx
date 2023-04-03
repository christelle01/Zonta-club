import React, { useState } from "react";
import { m } from 'framer-motion';
import "../../components/gallery/Gallery.css"

// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Card, CardActionArea, CardMedia, Typography, Grid, Dialog } from '@mui/material';
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
<Stack component={m.div} spacing={3} textAlign="justify">
<Typography variant="h3" sx={{ color: '#951616fc', textAlign: "center"}}>
Photos of the event
</Typography>
<Typography sx={ {textAlign: "center"}}>Discover Lome and the conference in pictures</Typography>
</Stack>
<Grid container spacing={2} py={5}>
        {PHOTOS.map((item) => (
          <Grid key={item.title} px={2} py={3} xs={12} sm={4} md={4} lg={4} xl={3}>
              <Card sx={{ borderRadius: 0 }} >
              <CardActionArea onClick={() => handleClick(item)}>
                <CardMedia
                  height="300"
                  component="img"
                  image={item.image}
                />
                  <Typography  sx={{ textAlign: 'center', py:2, color: "#000", height: "100px" }}>
                    {item.title}
                  </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>

    <Dialog open={!!selectedImage} onClose={handleClose}>
      {selectedImage && (
        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          style={{ maxWidth: "100%", maxHeight: "100%", overflow: "hidden" }}
        />
      )}
    </Dialog>

  </Container>
</RootStyle>
)}