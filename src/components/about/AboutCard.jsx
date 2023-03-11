import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='https://toastmastersinscriptions.online/assets/img/about/accueil.jpg' alt='' />
          </div>
          <div className='right row' >
            <Heading subtitle='' title='PCO Note' />
           <p>Dear Toastmasters,</p>
           <p>To be the President of the District 94 2023 Conference Organizing Committee is a privilege and a great honor for me.</p>
           <p>With my Team, we are waiting for you to live an unforgettable experience in Lome-la-Belle.</p>
           <p>The District Conference will take place from May 24 to 27, 2023, in Togo, a beautiful country in West Africa, which enjoys a mild climate and a favorable environment to spend a dream stay.</p>
           <p>During four days, we will practice and live intensely the leadership and oral communication, the two pillars of the Toastmasters methodology, through an enticing and unpublished program that the Conference Organizing Committee has concocted for you.</p>
           <p>Lome-la-Belle, is honored and proud to welcome Toastmasters from Benin, Burkina Faso, Cameroon, Congo, Ivory Coast, Ghana, Gambia, Guinea, Mali, Nigeria, Niger, Senegal and from all over the world.</p>
           <p>Sign up and join us to experience unforgettable moments.</p>
           <p>Lome 2023 will be unique.</p>
           <p><strong>Naka De SOUZA, Chair of the conference organizing committee</strong></p>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
