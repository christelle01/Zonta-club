import React, { useState } from "react";
import {
  Container,
  Paper,
  Stack,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { useSignUpFormContext } from "./Inscription";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { frFR } from "@mui/x-date-pickers/locales";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { HOTELSNAME } from "../../dummydata";
import { HOTELSNAME1 } from "../../dummydata";
import { HOTELSNAME2 } from "../../dummydata";


export default function HostingInfo({ handleNext, handlePrev }) {
  const { values, onChange } = useSignUpFormContext();
  const hostingInfo = values.hosting;

  // états locaux pour les noms d'hôtels choisis pour chaque catégorie
  const [grandHotelName, setGrandHotelName] = useState("Grand Hôtel");
  const [moyenHotelName, setMoyenHotelName] = useState("Moyen Hôtel");
  const [petitHotelName, setPetitHotelName] = useState("Petit Hôtel");


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
              <FormControl variant="outlined">
                <InputLabel id="noms">Choisir son hotel</InputLabel>
                <Select
                labelId="noms"
                name="noms"
                value={hostingInfo.hotelCategory}
                onChange={(e) => {
                  onChange("hosting.hotelCategory", e.target.value);
                  // Mettre à jour les noms d'hôtels choisis en fonction de la catégorie
                  const category = e.target.value;
                  setGrandHotelName(HOTELSNAME[category].grandHotel);
                  setMoyenHotelName(HOTELSNAME[category].moyenHotel);
                  setPetitHotelName(HOTELSNAME[category].petitHotel);
                }}
                label="noms"
                native
                >
                  <optgroup label={grandHotelName}>
                  {HOTELSNAME.map((hot) => (<option key={hot.noms} value={hot.noms}>{hot.noms}</option>))}
                  </optgroup>
                  <optgroup label={moyenHotelName}>
                  {HOTELSNAME1.map((hot) => (<option key={hot.noms} value={hot.noms}>{hot.noms}</option>))}
                  </optgroup>
                  <optgroup label={petitHotelName}>
                  {HOTELSNAME2.map((hot) => (<option key={hot.noms} value={hot.noms}>{hot.noms}</option>))}
                  </optgroup>
                </Select>
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
                  onChange={(val) => onChange("hosting.entryDate", val)}
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












