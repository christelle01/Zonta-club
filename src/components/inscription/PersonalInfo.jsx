import React from "react";
import {
  Container,
  Paper,
  Stack,
  TextField,
  Button,
  FormControl,
  Typography,
  Autocomplete,
} from "@mui/material";
import { useSignUpFormContext } from "./Inscription";
import { countries } from "../../constant/countries";
import { posts } from "../../posts";
import { area } from "../../area";
import { divisions } from "../../divisions";

export default function PersonalInfo({ handleNext }) {
  const { values, onChange } = useSignUpFormContext();
  const personalInfo = values.personal;

  const handleChange = (e) => {
    onChange(`personal.${e.target.name}`, e.currentTarget.value);
  };

  const paysOption = countries.find(
    (option) => option.value === personalInfo.pays
  );
  const posteOption = posts.find(
    (option) => option.value === personalInfo.poste
  );
  const divisionOption = divisions.find(
    (option) => option.value === personalInfo.division
  );

  console.log(personalInfo);

  return (
    <Container>
      <Paper elevation={0} sx={{ p: 3 }}>
        <Stack width={1} spacing={4}>
          <Stack direction="row" width={1} spacing={3}>
            <Stack width={1}>
              <TextField
                fullWidth
                name="prenom"
                label="Prénoms"
                variant="outlined"
                value={personalInfo.prenom}
                onChange={handleChange}
                required
              />
            </Stack>
            <Stack width={1}>
              <TextField
                fullWidth
                name="nom"
                label="Nom"
                variant="outlined"
                value={personalInfo.nom}
                onChange={handleChange}
                required
              />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} width={1}>
            <Stack width={1}>
              <FormControl fullWidth variant="outlined" required>
                <Autocomplete
                  id="pays"
                  name="pays"
                  options={countries}
                  value={paysOption}
                  onChange={(_, newValue) => {
                    onChange("personal.pays", newValue.label);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Pays"
                      name="pays"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </FormControl>
            </Stack>
            <Stack width={1}>
              <TextField
                fullWidth
                name="telephone"
                label="Numéro de téléphone"
                variant="outlined"
                value={personalInfo.telephone}
                onChange={handleChange}
                required
              />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} width={1}>
            <Stack width={1}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                variant="outlined"
                value={personalInfo.email}
                onChange={handleChange}
                required
              />
            </Stack>
            <Stack width={1}>
              <FormControl fullWidth variant="outlined" required>
                <Autocomplete
                  id="poste"
                  options={posts}
                  getOptionLabel={(option) =>
                    option.value ? option.value : ""
                  }
                  value={posteOption}
                  onChange={(_, newValue) => {
                    onChange("personal.poste", newValue.value);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Poste"
                      name="poste"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </FormControl>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} width={1}>
            <Stack width={1}>
              <FormControl fullWidth variant="outlined" required>
                <Autocomplete
                  id="zone"
                  options={area}
                  getOptionLabel={(option) =>
                    option.value ? option.value : ""
                  }
                  value={personalInfo.area}
                  onChange={(_, newValue) => {
                    onChange("personal.zone", newValue.value);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Zone"
                      name="zone"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </FormControl>
            </Stack>
            <Stack width={1}>
              <FormControl fullWidth variant="outlined" required>
                <Autocomplete
                  id="division"
                  options={divisions}
                  getOptionLabel={(option) =>
                    option.value ? option.value : ""
                  }
                  value={divisionOption}
                  onChange={(_, newValue) => {
                    onChange("personal.division", newValue.value);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Division"
                      name="division"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </FormControl>
            </Stack>
          </Stack>

          <Stack width={1}>
            <TextField
              fullWidth
              name="disposition"
              multiline
              minRows={4}
              label="Disposition particulière"
              variant="outlined"
              value={personalInfo.disposition}
              onChange={handleChange}
              required
            />
          </Stack>

          <Stack>
            <Typography>
              Après inscription vous serez redirigé vers la page de paiement
              pour valider votre inscription.
            </Typography>
          </Stack>

          <Stack direction="row" width={1} justifyContent="flex-end">
            <Stack width={300}>
              <Button onClick={handleNext} variant="contained">
                Suivant
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
