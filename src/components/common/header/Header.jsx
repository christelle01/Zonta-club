import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

import Button from '@material-ui/core/Button';

const Header = () => {
  const [click, setClick] = useState(false);
  const headerRef = useRef(null);
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const header = headerRef.current;
    const sticky = header.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <>
      <Head />
      <header ref={headerRef}>
        <nav className={`flexSB ${headerRef.current && headerRef.current.classList.contains('sticky') ? 'sticky-text' : ''}`}>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/schedules">Schedules</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/hotels">Hotels</Link>
            </li>
            <li>
              <Link to="/inscription">Inscription</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Button variant="contained" color="primary" onClick={handleLanguageChange}>
                {language === 'fr' ? 'Anglais' : 'Français'}
              </Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
