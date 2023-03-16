import React from 'react';
import { Box, Typography, Container, Stack, Paper} from '@mui/material';
import { styled } from '@mui/material/styles';

import "../../components/schedules/Schedules.css"
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
    <Box sx={{ width: '100%', textAlign: "center"}}>
      
      <Typography variant="h2" color={"#951616fc"} gutterBottom>Event Schedules</Typography>
    
      <Typography variant="subtitle1" gutterBottom>
      In the program, Conferences-workshops; Speech contest; hall of fame; Election of District 94 Officers for the upcoming term; Gala dinner and networking, everything has been concocted to make you live a wonderful experience, in the beautiful city of Lomé.
      </Typography>
      
      <Stack width={1} direction="row" justifyContent={'center'} spacing={2}>
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
      <Stack component={Paper} bgcolor={selected?"#951616fc":""} height={100} width={100} justifyContent={'center'} textAlign="center">
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