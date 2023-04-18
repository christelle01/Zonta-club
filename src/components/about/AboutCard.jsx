import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <Stack className="aboutHome" py={15}>
        <Grid className="container flexSB">
          <Box className="left row">
            <img src="/images/pco.jpeg" alt="pco note" />
          </Box>
          <Box className="right row" sx={{ textAlign: "justify" }}>
            <Heading subtitle="" title="Gouverneur" />
            <Typography gutterBottom>Chers membres du Zonta,</Typography>
            <Typography gutterBottom>
            Nous sommes ravis d'accueillir la conférence du District 18 au Togo, regroupant les
clubs d'Accra, Abidjan, Ouagadougou, Lagos, Freetown et Ibadan.
            </Typography>
            <Typography gutterBottom>
            Cette conférence offrira une occasion inoubliable de partager des connaissances et
d'acquérir de nouvelles compétences dans le domaine de la promotion des droits des
femmes et de l'égalité de genre.
            </Typography>
            <Typography gutterBottom>
            Le Togo est un pays accueillant, riche en culture et en histoire, et nous sommes
impatients de vous faire découvrir notre patrimoine, notre gastronomie, nos traditions
et notre hospitalité légendaire.
            </Typography>
            <Typography gutterBottom>
            Nous espérons que cette conférence sera une expérience enrichissante pour tous les
participants.{" "}
            </Typography>
            <Typography>Bienvenue au Togo !</Typography>
          </Box>
        </Grid>
      </Stack>
      <Awrapper />
    </>
  );
};

export default AboutCard;