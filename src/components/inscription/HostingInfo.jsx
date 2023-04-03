import React from "react";
import {
  Container,
  Paper,
  Stack,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useSignUpFormContext } from "./Inscription";

export default function HostingInfo({ handleNext, handlePrev }) {
  const { values, onChange } = useSignUpFormContext();
  const hostingInfo = values.hosting;

  const handleChange = (e) => {
    onChange(`hosting.${e.target.name}`, e.target.value);
  };

  return (
    <Container>
      <Paper elevation={0} sx={{ p: 3 }}>
        <Stack width={1} spacing={4}>
          <FormControlLabel
            control={<Checkbox />}
            name="personlResidence"
            label="Résidence personnelle"
            checked={hostingInfo.personlResidence}
            onChange={(e) =>
              onChange(`hosting.${e.target.name}`, e.target.checked)
            }
          />

          <Stack direction="row" spacing={3} width={1}>
            <Stack width={1}>
              <TextField
                fullWidth
                name="hotelName"
                size="small"
                label="Choisir son hotel"
                variant="outlined"
                value={hostingInfo.hotelName}
                onChange={handleChange}
                required
              />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} width={1}>
            <Stack width={1}>
              <TextField
                fullWidth
                size="small"
                name="entryDate"
                label="Date d'entrée à l'hôtel"
                variant="outlined"
                value={hostingInfo.entryDate}
                onChange={handleChange}
                required
              />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} width={1}>
            <Stack width={1}>
              <TextField
                fullWidth
                size="small"
                name="checkOut"
                label="Date de départ de l'hôtel"
                variant="outlined"
                value={hostingInfo.checkOut}
                onChange={handleChange}
                required
              />
            </Stack>
          </Stack>

          <Stack
            direction="row"
            width={1}
            justifyContent="flex-end"
            spacing={2}
          >
            <Stack width={200}>
              <Button onClick={handlePrev} variant="outlined">
                précédent
              </Button>
            </Stack>

            <Stack width={200}>
              <Button variant="contained" onClick={handleNext}>
                Suivant
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
