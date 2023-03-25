import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <Stack className='aboutHome' py={5}>
        <Grid className='container flexSB'>
          <Box className='left row'>
            <img src='https://toastmastersinscriptions.online/assets/img/about/accueil.jpg' alt='' />
          </Box>
          <Box className='right row' >
            <Heading subtitle='' title='PCO Note' />
              <Typography>Dear Toastmasters,</Typography>
              <Typography>To be the President of the District 94 2023 Conference Organizing Committee is a privilege and a great honor for me.</Typography>
              <Typography>With my Team, we are waiting for you to live an unforgettable experience in Lome-la-Belle.</Typography>
              <Typography>The District Conference will take place from May 24 to 27, 2023, in Togo, a beautiful country in West Africa, which enjoys a mild climate and a favorable environment to spend a dream stay.</Typography>
              <Typography>During four days, we will practice and live intensely the leadership and oral communication, the two pillars of the Toastmasters methodology, through an enticing and unpublished program that the Conference Organizing Committee has concocted for you.</Typography>
              <Typography>Lome-la-Belle, is honored and proud to welcome Toastmasters from Benin, Burkina Faso, Cameroon, Congo, Ivory Coast, Ghana, Gambia, Guinea, Mali, Nigeria, Niger, Senegal and from all over the world.</Typography>
              <Typography>Sign up and join us to experience unforgettable moments.</Typography>
              <Typography>Lome 2023 will be unique.</Typography>
              <Typography><strong>Naka De SOUZA, Chair of the conference organizing committee</strong></Typography>
          </Box>
        </Grid>
      </Stack>
      <Awrapper />
    </>
  )
}

export default AboutCard
