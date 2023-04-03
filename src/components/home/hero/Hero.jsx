import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Stack } from "@mui/material";
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
        <p>
          Le Togo a l'honneur d'accueillir tous les membres du club Zonta du
          monde entier du 19 au 22 Octobre 2023, pour la conférence du District
          18. Pour vous enregistrer et participer à cet évènement, nous vous
          invitons cordialement à cliquer sur le lien ci-dessous.
        </p>

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
