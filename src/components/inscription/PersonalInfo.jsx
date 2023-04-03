import React, { useState } from 'react'
import { Container, Paper, Stack, TextField, MenuItem, Button, FormControl, InputLabel, Select, Typography } from '@mui/material';
import { countries } from '../../constant/countries';
import { posts } from '../../posts';
import { area } from '../../area';
import { themeColors,  } from '../../constant/themeColors'
import { divisions } from '../../divisions';

export default function PersonalInfo({ handleNext }) {

    const [personalInfo, setPersonalInfo] = useState({
        nom: '',
        prenom: '',
        pays: '',
        telephone: '',
        email: '',
        poste: '',
        zone: '',
        division: '',
        disposition: ''
    });


    const handleChange = (e) =>{
        setPersonalInfo((prev) => ({...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit =(e) =>{
         e.preventDefault();
         handleNext();
    }
    
console.log(personalInfo);
  return (
      <Container>
            <Paper elevation={0} sx={{p: 3 }}>
                <form  noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Stack width={1} spacing={4}>
                    <Stack direction='row' width={1} spacing={3}>
                        <Stack width={1}>
                            <TextField fullWidth name="nom" label="Prénoms" variant="outlined" value={personalInfo.nom} onChange={handleChange} required />
                        </Stack>
                        <Stack width={1}>
                            <TextField fullWidth name="prenom" label="Nom" variant="outlined" value={personalInfo.prenom} onChange={handleChange} required />
                        </Stack>
                    </Stack>

                    <Stack direction='row' spacing={3} width={1}>
                        <Stack width={1}>
                            <FormControl fullWidth  variant="outlined" required>
                                <InputLabel id="pays-label">Pays</InputLabel>
                                <Select
                                labelId="pays-label"
                                name="pays"
                                value={personalInfo.pays}
                                onChange={handleChange}
                                label="Country"
                                >
                                <MenuItem value="">
                                    <em>Choisir son pays</em>
                                </MenuItem>
                                {countries.map((cont) => (<MenuItem key={cont.label} value={cont.label}>{cont.label}</MenuItem>))}
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack width={1}>
                            <TextField fullWidth name="telephone" label="Numéro de téléphone" variant="outlined" value={personalInfo.telephone} onChange={handleChange} required />
                        </Stack>
                    </Stack>

                    <Stack direction='row' spacing={3} width={1}>
                        <Stack width={1}>
                            <TextField fullWidth name="email" label="Email" variant="outlined" value={personalInfo.email} onChange={handleChange} required />
                        </Stack>
                        <Stack width={1}>
                            <FormControl fullWidth  variant="outlined" required>
                                <InputLabel id="poste_id">Poste</InputLabel>
                                <Select
                                labelId="poste_label"
                                name="poste"
                                value={personalInfo.poste}
                                onChange={handleChange}
                                label="Post"
                                >
                                <MenuItem value="">
                                    <em>Choisir son poste</em>
                                </MenuItem>
                                {posts.map((post, index) => (<MenuItem key={post.value +index} value={post.value}>{post.value}</MenuItem>))}
                                </Select>
                            </FormControl>                        
                        </Stack>
                    </Stack>

                    <Stack direction='row' spacing={3} width={1}>
                        <Stack width={1}>
                            <FormControl fullWidth  variant="outlined" required>
                                <InputLabel id="zone_id">Zone</InputLabel>
                                <Select
                                labelId="zone_label"
                                name="zone"
                                value={personalInfo.zone}
                                onChange={handleChange}
                                label="Zone"
                                >
                                <MenuItem value="">
                                    <em>Choisir sa zone</em>
                                </MenuItem>
                                {area.map((are, index) => (<MenuItem key={are.value +index} value={are.value}>{are.value}</MenuItem>))}
                                </Select>
                            </FormControl>                         
                        </Stack>
                        <Stack width={1}>
                            <FormControl fullWidth  variant="outlined" required>
                                <InputLabel id="division_id">Division</InputLabel>
                                <Select
                                labelId="division_label"
                                name="division"
                                value={personalInfo.division}
                                onChange={handleChange}
                                label="Division"
                                >
                                <MenuItem value="">
                                    <em>Choisir sa division</em>
                                </MenuItem>
                                {divisions.map((division, index) => (<MenuItem key={division.value +index} value={division.value}>{division.value}</MenuItem>))}
                                </Select>
                            </FormControl>                    
                    </Stack>
                    </Stack>

                    <Stack width={1}>
                        <TextField fullWidth name="disposition" multiline minRows={4} label="Disposition particulière" variant="outlined" value={personalInfo.disposition} onChange={handleChange} required />
                    </Stack>
                    
                    <Stack>
                    <Typography>
                    Après inscription vous serez redirigé vers la page de paiement pour valider votre inscription.
                    </Typography>
                    </Stack>

                    <Stack direction='row' width={1} justifyContent='flex-end'>
                        <Stack width={300}>
                            <Button type="submit" variant="contained" sx={{ bgcolor: themeColors.PRIMARY, ':hover': { bgcolor: themeColors.PRIMARY} }}>Suivant</Button>
                        </Stack>
                    </Stack>
                </Stack>
                </form>
            </Paper>
     </Container>
  )
}
