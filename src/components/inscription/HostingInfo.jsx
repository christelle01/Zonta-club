import React, { useState } from 'react';
import {
  Container,
  Paper,
  Stack,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import { themeColors } from '../../constant/themeColors';

export default function HostingInfo({ handleNext }) {
  const [hostingInfo, setHostingInfo] = useState({
    hotelName: '',
    entryDate: '',
    checkOut: '',
  });

  const handleChange = (e) => {
    setHostingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  console.log(hostingInfo);
  return (
    <Container>
      <Paper elevation={0} sx={{ p: 3 }}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack width={1} spacing={4}>
            <FormControlLabel
              control={<Checkbox />}
              label="Résidence personnelle"
            />
            <Stack direction="row" spacing={3} width={1}>
              <Stack width={1}>
                <TextField
                  fullWidth
                  name="arrival"
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
                  name="returnDate"
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
                  name="entryPoint"
                  label="Date de départ de l'hôtel"
                  variant="outlined"
                  value={hostingInfo.checkOut}
                  onChange={handleChange}
                  required
                />
              </Stack>
            </Stack>

            <Stack direction="row" width={1} justifyContent="flex-end">
              <Stack width={300}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: themeColors.PRIMARY,
                    ':hover': { bgcolor: themeColors.PRIMARY },
                  }}
                >
                  Suivant
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
