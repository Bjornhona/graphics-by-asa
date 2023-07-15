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

const Layout = () => {
  const year = new Date().getFullYear();
  const socialMedia = [
    [facebook, "facebook"],
    [twitter, "twitter"],
    [instagram, "instagram"],
    [linkedin, "linkedin"],
    [github, "github"],
    [youtube, "youtube"]
  ];

  return (
    <div id="layout">
      <header>
        <div className='inside'>
          <div className="header-top">
            <a href="https://www.graphicsbyasa.com/">
              <div className="logo-container"><img src={logo} className="App-logo" alt="logo" /></div>
            </a>
            <nav>
              <NavLink to="/">home</NavLink>
              <NavLink to="/portfolio">portfolio</NavLink>
              <NavLink to="/resume">resume</NavLink>
              <NavLink to="/blog">blog</NavLink>
              <NavLink to="/contact">contact</NavLink>
            </nav>
            <h3>Follow me</h3>
            <div className="social-media-icons">
              {socialMedia.map((social, index) => {
                return <img src={social[0]} kay={index} className="social-media-icon" alt={social[1]} />
              })}
            </div>
          </div>
          <div className="header-bottom">
            <p>{year} | All rights reserved | <a href="https://www.graphicsbyasa.com">Graphics by Åsa</a></p>
          </div>
        </div>
      </header>
      <body>
        <Outlet />
      </body>
    </div>
  )
}

export default Layout;