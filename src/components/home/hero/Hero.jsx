import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log("inscription");
    navigate("/inscription");
  };

  return (
    <section className="hero">
      <Stack
        height={1}
        width={{ xs: 1, md: 0.5 }}
        justifyContent="center"
        pl={{ xs: 2, md: 10 }}
      >
        <Heading subtitle="" title="CONFÉRENCE DISTRICT 18" />
        <Typography gutterBottom>
        Le Togo a le privilège d'accueillir la conférence du District 18 du club Zonta, qui
réunira les membres du Club Zonta du monde entier, du 19 au 22 octobre 2023
        </Typography>
        <Typography>
        Afin de vous enregistrer à cette rencontre d'envergure, nous vous invitons à cliquer
sur "s’inscrire ".
        </Typography>

        <Stack direction="row">
          <button className="primary-btn" onClick={handleNavigation}>
            S'INSCRIRE <i className="fa fa-long-arrow-alt-right"></i>
          </button>
        </Stack>
      </Stack>
    </section>
  );
};

export default Hero;
