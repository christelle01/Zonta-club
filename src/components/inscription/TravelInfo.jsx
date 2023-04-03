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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  fullWidth
                  name="arrivalDate"
                  size="small"
                  label="Date d'arrivée à Lomé"
                  variant="outlined"
                  value={travelInfo.arrivalDate}
                  onChange={(val) => onChange("travel.arrivalDate", val)}
                  required
                />
              </LocalizationProvider>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} width={1}>
            <Stack width={1}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  fullWidth
                  name="returnDate"
                  size="small"
                  label="Date de retour de Lomé"
                  variant="outlined"
                  value={travelInfo.returnDate}
                  onChange={(val) => onChange("travel.returnDate", val)}
                  required
                />
              </LocalizationProvider>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} width={1}>
            <Stack width={1}>
              <TextField
                fullWidth
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
