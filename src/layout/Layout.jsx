import { useState, useRef, useEffect } from 'react';
import {
  Outlet,
  NavLink,
} from "react-router-dom";
import './layout.scss';
import logo from '../logo2.svg';
import twitter from '../styles/icons/twitter.svg';
import linkedin from '../styles/icons/linkedin.svg';
import instagram from '../styles/icons/instagram.svg';
import github from '../styles/icons/github.svg';
import youtube from '../styles/icons/youtube.svg';
import facebook from '../styles/icons/facebook.svg';
import '../App.scss';
import { ReactComponent as BurgerIcon } from './burger-icon.svg';
import { ReactComponent as CloseIcon } from './close-button.svg';

const Layout = () => {
  const [showNav, setShowNav] = useState(false);
  const year = new Date().getFullYear();
  const ref = useRef(null);
  const socialMedia = [
    [facebook, "facebook"],
    [twitter, "twitter"],
    [instagram, "instagram"],
    [linkedin, "linkedin"],
    [github, "github"],
    [youtube, "youtube"]
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowNav(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const myLogo = () => {
    return (
      <a href="https://www.graphicsbyasa.com/">
        <div className="logo-container"><img src={logo} className="App-logo" alt="logo" /></div>
      </a>
    );
  }

  const myNavigation = () => {
    return (
      <nav ref={ref} className={!showNav ? 'show-nav-navigation' : null}>
        <NavLink to="/" onClick={() => setShowNav(false)}>home</NavLink>
        <NavLink to="/portfolio" onClick={() => setShowNav(false)}>portfolio</NavLink>
        <NavLink to="/resume" onClick={() => setShowNav(false)}>resume</NavLink>
        <NavLink to="/blog" onClick={() => setShowNav(false)}>blog</NavLink>
        <NavLink to="/contact" onClick={() => setShowNav(false)}>contact</NavLink>
        <CloseIcon onClick={() => setShowNav(false)} />
      </nav>
    );
  }

  return (
    <div id="layout">
      {showNav && myNavigation()}
      <header>
        <div className='inside'>
          <div className="header-top">
            {myLogo()}
            {myNavigation()}
            <div>
              <h3>Follow me</h3>
              <div className="social-media-icons">
                {socialMedia.map((social, index) => {
                  return <img src={social[0]} key={index} className="social-media-icon" alt={social[1]} />
                })}
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <p>{year} | All rights reserved | <a href="https://www.graphicsbyasa.com">Graphics by Åsa</a></p>
          </div>
        </div>
      </header>
      <div className={`top-header ${showNav ? 'show-nav-top-header' : null}`}>
        {myLogo()}
        {!showNav && <BurgerIcon className="burger-menu" onClick={() => setShowNav(!showNav)} />}
      </div>
      <div className={showNav ? 'layout-body nav-body' : 'layout-body'}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;