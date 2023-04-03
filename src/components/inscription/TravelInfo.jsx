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

export default function TravelInfo({ handleNext, handlePrev }) {
  const { values, onChange } = useSignUpFormContext();

  const travelInfo = values.travel;

  const handleChange = (e) => {
    onChange(`travel.${e.target.name}`, e.target.value);
  };

  return (
    <Container>
      <Paper elevation={0} sx={{ p: 3 }}>
        <Stack width={1} spacing={4}>
          <FormControlLabel
            control={<Checkbox />}
            label="Résident à Lomé"
            name="leaveAtLome"
            checked={travelInfo.leaveAtLome}
            onChange={(e) =>
              onChange(`travel.${e.target.name}`, e.target.checked)
            }
          />
          <Stack direction="row" spacing={3} width={1}>
            <Stack width={1}>
              <TextField
                fullWidth
                name="arrivalDate"
                size="small"
                label="Date d'arrivée à Lomé"
                variant="outlined"
                value={travelInfo.arrivalDate}
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
                name="returnDate"
                label="Date de retour de Lomé"
                variant="outlined"
                value={travelInfo.returnDate}
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
                name="entryPoint"
                label="Point d'entrée à Lomé"
                variant="outlined"
                value={travelInfo.entryPoint}
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
