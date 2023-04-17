import React from "react";
import {
  Container,
  Paper,
  Stack,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  Autocomplete,
} from "@mui/material";
import { useSignUpFormContext } from "./Inscription";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { frFR } from "@mui/x-date-pickers/locales";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { HOTELSNAME } from "../../dummydata";
import { HOTELSNAME1 } from "../../dummydata";
import { HOTELSNAME2 } from "../../dummydata";

const HOTELSNAME_with_cat = HOTELSNAME.map((option) => ({
  ...option,
  cat: "Grand Hôtel",
}));
const HOTELSNAME1_with_cat = HOTELSNAME1.map((option) => ({
  ...option,
  cat: "Moyen Hôtel",
}));
const HOTELSNAME2_with_cat = HOTELSNAME2.map((option) => ({
  ...option,
  cat: "Petit Hôtel",
}));

const HOTELS = [
  ...HOTELSNAME_with_cat,
  ...HOTELSNAME1_with_cat,
  ...HOTELSNAME2_with_cat,
];

export default function HostingInfo({ handleNext, handlePrev }) {
  const { values, onChange } = useSignUpFormContext();
  const hostingInfo = values.hosting;

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
              <FormControl fullWidth required variant="outlined">
                <Autocomplete
                  fullWidth
                  id="noms"
                  options={HOTELS}
                  value={hostingInfo.hotel}
                  groupBy={(option) => option.cat}
                  getOptionLabel={(option) => option.noms}
                  onChange={(e, val) => {
                    onChange("hosting.hotel", val);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="noms"
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
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={
                  frFR.components.MuiLocalizationProvider.defaultProps
                    .localeText
                }
              >
                <DatePicker
                  fullWidth
                  name="entryDate"
                  size="small"
                  label="Date d'entrée à l'hôtel"
                  variant="outlined"
                  value={hostingInfo.entryDate}
                  onChange={(val) => {
                    onChange("hosting.entryDate", val);
                  }}
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
                  name="checkOut"
                  size="small"
                  label="Date de départ de l'hôtel"
                  variant="outlined"
                  value={hostingInfo.checkOut}
                  onChange={(val) => onChange("hosting.checkOut", val)}
                  required
                />
              </LocalizationProvider>
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
