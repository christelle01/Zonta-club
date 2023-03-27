import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Stack, Button } from "@mui/material"
import { useNavigate  } from "react-router-dom"


const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = () =>{
    console.log('inscription')
    navigate('/inscription');
  }


  return (
        <section className='hero'>
          <Stack height={1} width={{xs:1, md: 0.5}} justifyContent='center' pl={{xs: 2, md: 10}}>
              <Heading subtitle='' title='DISTRICT 94 CONFERENCE' />
              <p>From May 24 to 27, 2023, Togo welcomes the Toastmasters of District 94 for its big annual meeting.
                To register and participate in this great meeting, please click on the button</p>

              <Stack direction='row'>
                <button className='primary-btn' onClick={handleNavigation}>
                REGISTER <i className='fa fa-long-arrow-alt-right'></i>
                </button>   
              </Stack>
          </Stack>

      </section>
      

  )
}

export default Hero
