import React, { useState } from 'react'
import { Stack, TextField, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';
import TabButton from '../common/custom/tab/TabButton';
import TabPanel from '../common/custom/tab/TabPanel';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from './PersonalInfo';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));


export default function Inscription() {
    const [currentTab, setCurrentTab]= useState(0);
    const classes = useStyles();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire au serveur ou à une API.
  };

  const handleNext = () =>{
    setCurrentTab((prev) => prev === 3 ? 0 : prev+1 );
  }

  const handlePrev = () =>{
     setCurrentTab((prev) => prev === 0 ? 0 : prev-1);
  }


  return (
    <Stack width={1} justifyContent='center' alignItems='center' p={2}>

        <Stack width={1} direction='row' spacing={3} justifyContent='center'>
            <TabButton title='Personal Information' value={0} selected={currentTab === 0} onClick={setCurrentTab} />
            <TabButton title='Travel Information' value={1} selected={currentTab === 1} onClick={setCurrentTab} />
            <TabButton title='Hosting Information' value={2} selected={currentTab === 2} onClick={setCurrentTab} />
            <TabButton title='Summary' value={3} selected={currentTab === 3} onClick={setCurrentTab} />
        </Stack>

       {currentTab ===0 && <TabPanel>  <PersonalInfo handleNext={handleNext} /> </TabPanel>}
       {currentTab ===1 && <TabPanel> 02 </TabPanel>}
       {currentTab ===2 && <TabPanel> 03 </TabPanel>}
       {currentTab ===3 && <TabPanel> 04 </TabPanel>}

    </Stack>
  )
}

