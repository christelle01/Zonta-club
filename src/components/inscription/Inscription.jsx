import React, { useState } from 'react'
import { Stack, Grid, TextField, Button } from '@mui/material';
import TabButton from '../common/custom/tab/TabButton';
import TabPanel from '../common/custom/tab/TabPanel';
import { makeStyles } from '@material-ui/core/styles';

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


  return (
    <Stack width={1} justifyContent='center' alignItems='center'>

        <Stack width={1} direction='row' spacing={3} justifyContent='center'>
            <TabButton title='Personal Information' value={0} selected={currentTab === 0} onClick={setCurrentTab} />
            <TabButton title='Travel Information' value={1} selected={currentTab === 1} onClick={setCurrentTab} />
            <TabButton title='Hosting Information' value={2} selected={currentTab === 2} onClick={setCurrentTab} />
            <TabButton title='Summary' value={3} selected={currentTab === 3} onClick={setCurrentTab} />
        </Stack>

       {currentTab ===0 && <TabPanel> 
        <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Nom"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Prénom"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            type="email"
          />
          <TextField
            required
            id="outlined-required"
            label="Numéro de téléphone"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Intérêts (facultatif)"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Soumettre
          </Button>
        </Grid>
      </Grid>
    </form>
         </TabPanel>}
       {currentTab ===1 && <TabPanel> 02 </TabPanel>}
       {currentTab ===2 && <TabPanel> 03 </TabPanel>}
       {currentTab ===3 && <TabPanel> 04 </TabPanel>}

    </Stack>
  )
}

