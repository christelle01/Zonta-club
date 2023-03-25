import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Stack } from "@mui/material"


const Hero = () => {
  return (
        <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Stack py={15}>
              <Heading subtitle='' title='DISTRICT 94 CONFERENCE' />
              <p>From May 24 to 27, 2023, Togo welcomes the Toastmasters of District 94 for its big annual meeting.
                To register and participate in this great meeting, please click on the button</p>
              <div className='button'>
                <button className='primary-btn'>
                REGISTER <i className='fa fa-long-arrow-alt-right'></i>
                </button>   
              </div>
            </Stack>
          </div>
        </div>
      </section>
      

  )
}

export default Hero
