import { useState, useRef, useEffect } from 'react';
import {
  Outlet,
  NavLink,
} from "react-router-dom";
import './layout.scss';
import logo from '../logo2.svg';
import '../App.scss';
import { ReactComponent as BurgerIcon } from './burger-icon.svg';
import { ReactComponent as CloseIcon } from './close-button.svg';
import { socialMediaIcons } from './social_media';
import { navigation } from './navigation';

const Layout = () => {
  const [showNav, setShowNav] = useState(false);
  const year = new Date().getFullYear();
  const ref = useRef(null);

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

  const MyLogo = () =>
    <a href="https://www.graphicsbyasa.com/">
      <div className="logo-container"><img src={logo} className="App-logo" alt="logo" /></div>
    </a>;

  const MyNavigation = () =>
    <nav ref={ref} className={!showNav ? 'show-nav-navigation' : null}>
      {navigation.map((nav, index) => 
        <NavLink to={nav.link} key={index} onClick={() => setShowNav(false)}>{nav.name}</NavLink>)}
      <CloseIcon onClick={() => setShowNav(false)} />
    </nav>;

  const FollowMe = () =>
    <div className="follow-me">
      <h3>Follow me</h3>
      <div className="social-media-icons">
        {socialMediaIcons.map((social, index) => {
          return <a href={social.link} target="_blank" key={index}>
            <img src={social.icon} key={index} className="social-media-icon" alt={"Social Media Icon"} />
          </a>
        })}
      </div>
    </div>;

  const Copyrights = () =>
    <div className={showNav ? 'header-bottom nav-bottom' : 'header-bottom'}>
      <p>{year} | All rights reserved | <a href="https://www.graphicsbyasa.com">Graphics by Åsa</a></p>
    </div>;

  return (
    <div id="layout">
      {showNav && <MyNavigation />}
      <header>
        <div className='inside'>
          <div className="header-top">
            <MyLogo />
            <MyNavigation />
            <FollowMe />
          </div>
          <Copyrights />
        </div>
      </header>
      <div className={`top-header ${showNav ? 'show-nav-top-header' : null}`}>
        <MyLogo />
        {!showNav && <BurgerIcon className="burger-menu" onClick={() => setShowNav(!showNav)} />}
      </div>
      <div className={showNav ? 'layout-body nav-body' : 'layout-body'}>
        <Outlet />
        <FollowMe />
      </div>
      <footer>
        <Copyrights />
      </footer>
    </div>
  )
}

export default Layout;