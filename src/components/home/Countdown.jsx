import React from "react";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);

    // Définir la date de fin du compte à rebours
    this.state = {
      endDate: new Date("2023-05-20T00:00:00Z"),
    };
  }

  componentDidMount() {
    // Mettre à jour le compteur toutes les secondes
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    // Arrêter la mise à jour du compteur lorsque le composant est démonté
    clearInterval(this.interval);
  }

  render() {
    // Calculer le temps restant en millisecondes
    const timeRemaining = this.state.endDate - new Date();

    // Convertir le temps restant en jours, heures, minutes et secondes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    return (
      <Stack
        width={1}
        direction="row"
        justifyContent="center"
        position="absolute"
        bottom={-75}
      >
        <Box
          sx={{
            bgcolor: "#802528",
            width: "60%",
            borderRadius: 1,
            py: 5,
            color: "white",
          }}
        >
          <Stack
            width={1}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Stack width={1} justifyContent="center" alignItems="center">
              <Typography variant="h3">{days}</Typography>
              <Typography variant="subtitle1">Jours</Typography>
            </Stack>

            <Typography variant="h3" component="span">
              :
            </Typography>

            <Stack width={1} justifyContent="center" alignItems="center">
              <Typography variant="h3" component="span">
                {hours}
              </Typography>
              <Typography variant="subtitle1" component="span">
                Heures
              </Typography>
            </Stack>

            <Typography variant="h3" component="span">
              :
            </Typography>

            <Stack width={1} justifyContent="center" alignItems="center">
              <Typography variant="h3" component="span">
                {minutes}
              </Typography>
              <Typography variant="subtitle1" component="span">
                Minutes
              </Typography>
            </Stack>

            <Typography variant="h3" component="span">
              {" "}
              :
            </Typography>

            <Stack width={1} justifyContent="center" alignItems="center">
              <Typography variant="h3" component="span">
                {seconds}
              </Typography>
              <Typography variant="subtitle1" component="span">
                Secondes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    );
  }
}

export default CountdownTimer;
