import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Vérification de votre inscription</h1>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Entrer votre adresse email' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
  
      <div className='legal'>
      <div className='container'>
          <div className='logo'>
            <img src="https://www.zonta.org/images/Online/zontalogosm.png" alt="" height={50}/>
          </div>
          <div className="social">
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
        </div>
        <p>
          Copyright ©2023 Tous droits réservés | Développé par <a href="https://okydook.com">OKYDOOK</a>
        </p>
      </div>
    </>
  )
}

export default Footer
