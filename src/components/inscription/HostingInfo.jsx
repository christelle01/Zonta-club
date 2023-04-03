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

export default function TravelInfo({ handleNext }) {
  const [travelInfo, setTravelInfo] = useState({
    arrival: '',
    returnDate: '',
    entryPoint: '',
  });

  const handleChange = (e) => {
    setTravelInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  console.log(travelInfo);
  return (
    <Container>
      <Paper elevation={0} sx={{ p: 3 }}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack width={1} spacing={4}>
            <FormControlLabel
              control={<Checkbox />}
              label="Resident in Lome"
            />
            <Stack direction="row" spacing={3} width={1}>
              <Stack width={1}>
                <TextField
                  fullWidth
                  name="arrival"
                  label="Date of arrival in Lome"
                  variant="outlined"
                  value={travelInfo.arrival}
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
                  label="Return date from Lome"
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
                  name="entryPoint"
                  label="Entry point in Lome"
                  variant="outlined"
                  value={travelInfo.entryPoint}
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
