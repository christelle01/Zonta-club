import React from "react";
import {
  Container,
  Paper,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useSignUpFormContext } from "./Inscription";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { frFR } from "@mui/x-date-pickers/locales";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { ENTRYPOINT } from "../../dummydata";

export default function TravelInfo({ handleNext, handlePrev }) {
  const { values, onChange } = useSignUpFormContext();

  const travelInfo = values.travel

  

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
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={
                  frFR.components.MuiLocalizationProvider.defaultProps
                    .localeText
                }
              >
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
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={
                  frFR.components.MuiLocalizationProvider.defaultProps
                    .localeText
                }
              >
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
              <FormControl fullWidth variant="outlined" required>
                <InputLabel id="title">Point d'entrée à Lomé</InputLabel>
                <Select
                  fullWidth
                  variant="outlined"
                  labelId="title"
                  name="title"
                  value={travelInfo.entryPoint}
                  onChange={(event) => onChange("travel.entryPoint", event.target.value)}
                  label="Point d'entrée à Lomé"
                >
                  {ENTRYPOINT.map((ent) => (
                    <MenuItem key={ent.title} value={ent.title}>
                      {ent.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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