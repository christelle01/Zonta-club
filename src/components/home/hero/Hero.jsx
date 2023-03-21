import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "@mui/material"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
          <Heading subtitle='' title='DISTRICT 94 CONFERENCE' />
            <p>From May 24 to 27, 2023, Togo welcomes the Toastmasters of District 94 for its big annual meeting.
To register and participate in this great meeting, please click on the button</p>
            <div className='button'>
              <button className='primary-btn'>
                <Link to="/inscription">REGISTER <i className='fa fa-long-arrow-alt-right'></i></Link>
              </button>
              
            </div>
          </div>
        </div>
      </section>
      

    </>
  )
}

export default Hero
