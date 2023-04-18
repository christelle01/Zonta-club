import React from 'react';
import { Box, Typography, Container, Stack, Paper} from '@mui/material';
import { styled } from '@mui/material/styles';

import { PROGRAM } from '../../dummydata';



const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(0, 0, 10, 0),
    },
  }));

export default function Types() {
  const [selected, setSelected ] = React.useState(0)


  const handleSelected = (index) => {setSelected(index)}
  return (
   <RootStyle>
    <Container>
    <Box sx={{ width: '100%', textAlign: "center"}} py={10}>
      
      <Typography variant="h2" color={"#802528"} gutterBottom>Programme des évènements</Typography>
    
      <Typography variant="subtitle1" gutterBottom>
      Le programme inclut des conférences-ateliers, un dîner de gala et du
networking. Tout a été planifié pour offrir une expérience merveilleuse dans la belle ville de
Lomé.      
      </Typography>
      
      <Stack width={1} direction="row" justifyContent={'center'} spacing={4} py={5}>
        {PROGRAM.map((dayitem, index) => <DayCard key={dayitem.daytitle+index} dayitem={dayitem} handleSelected={handleSelected} selected={selected===index} index={index}/>)}
      </Stack>
      
    </Box>
    </Container>
   </RootStyle>
  );
}

const DayCard = ({dayitem, handleSelected, selected, index}) => {
  const {daytitle, daydate} = dayitem
  return (
    <Stack alignItems={'center'} onClick={() => handleSelected(index)} sx={{ cursor: "pointer",  }}>
      <Stack component={Paper}  bgcolor={selected? "#802528" : "#F6F9FA" }  sx={{ ':hover': { bgcolor: "#802528", color: 'white' }  }} height={80} width={80} justifyContent={'center'} textAlign="center">
        <Typography color={selected ? 'white' : ""}>{daytitle}</Typography>
        <Typography color={selected ? 'white' : ""}>{daydate}</Typography>
      </Stack>
      {selected && <Box sx={{
          width: 0,
          height: 0,
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderTop: "15px solid #951616fc",
      }}
      />}
    </Stack>
    
  )
}