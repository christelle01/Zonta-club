import React from "react"
import { Stack, styled } from '@mui/material'
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Countdown from "./Countdown"


const RootStyle  = styled(Stack)(() => ({
  width: '100%',
  height: '80vmin',
  position: 'relative',
  zIndex: -1,
}));

const Home = () => {
  return (
    <>
    <RootStyle>
      <Hero />
      <Countdown />
    </RootStyle>

      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
