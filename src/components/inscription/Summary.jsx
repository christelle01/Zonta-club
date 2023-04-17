import React from "react";
import {
  Container,
  Paper,
  Stack,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { useSignUpFormContext } from "./Inscription";
import { LoadingButton } from "@mui/lab";

export default function TravelInfo({ handlePrev }) {
  const { values, saving } = useSignUpFormContext();

  return (
    <Container>
      <Paper elevation={0} sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Stack>
            <Typography variant="h5">Information personnelle </Typography>
            <LineText title="NOM" value={values.personal.nom} required />
            <LineText
              title="PRENOM(S)"
              value={values.personal.prenom}
              required
            />
            <LineText title="PAYS" value={values.personal.pays} required />
            <LineText title="PHONE" value={values.personal.telephone} />
            <LineText title="EMAIL" value={values.personal.email} />
            <LineText title="POSTE" value={values.personal.poste} required />
            <LineText title="SECTEUR" value={values.personal.zone} required />
            <LineText
              title="DIVISION"
              value={values.personal.division}
              required
            />
            <LineText
              title="DISPOTITIONS PARTICULIÈRES"
              value={values.personal.disposition}
            />
          </Stack>

          <Stack>
            <Typography variant="h5">Information de voyage </Typography>
            <LineText
              title="DATE D'ARRIVÉE À LOMÉ"
              value={
                values.travel.arrivalDate
                  ? new Date(values.travel.arrivalDate).toLocaleDateString()
                  : ""
              }
            />
            <LineText
              title="DATE DE RETOUR DE LOMÉ"
              value={
                values.travel.returnDate
                  ? new Date(values.travel.returnDate).toLocaleDateString()
                  : ""
              }
            />
            <LineText
              title="POINT D'ENTRÉE À LOMÉ"
              value={values.travel.entryPoint}
            />
          </Stack>

          <Stack>
            <Typography variant="h5">Information d'hebergement </Typography>
            <LineText title="HOTELS" value={values.hosting.hotel.noms} />
            <LineText
              title="DATE D'ENTRÉE À L'HOTEL"
              value={
                values.hosting.entryDate
                  ? new Date(values.hosting.entryDate).toLocaleDateString()
                  : ""
              }
            />
            <LineText
              title="DATE DE SORTIE DE L'HOTEL"
              value={
                values.hosting.checkOut
                  ? new Date(values.hosting.checkOut).toLocaleDateString()
                  : ""
              }
            />
          </Stack>
        </Stack>

        <Stack
          mt={3}
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
            <LoadingButton loading={saving} type="submit" variant="contained">
              Valider
            </LoadingButton>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}

const LineText = ({ title, value = "", required = false }) => (
  <Stack>
    <Stack direction="row" width={1} py={0.5}>
      <Stack width={0.3}>
        <Typography variant="body2">
          {title}
          {!!required && (
            <span style={{ paddingTop: -5, fontWeight: "bold" }}>* </span>
          )}
        </Typography>
      </Stack>
      <Stack width={0.3}>
        <Typography variant="body2">{value}</Typography>
      </Stack>
    </Stack>
    <Divider />
  </Stack>
);
