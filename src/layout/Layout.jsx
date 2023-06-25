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

  return (
    <div id="layout">
      <header>
        <div className='inside'>
          <div className="header-top">
            <a href="https://www.graphicsbyasa.com/">
              <div className="logo-container"><img src={logo} className="App-logo" alt="logo" /></div>
            </a>
            <p>Menu</p>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/resume">Resume</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <p>Follow me</p>
            <div className="social-media-icons">
              <img src={facebook} className="social-media-icon" alt="facebook" />
              <img src={twitter} className="social-media-icon" alt="twitter" />
              <img src={instagram} className="social-media-icon" alt="instagram" />
              <img src={linkedin} className="social-media-icon" alt="linkedin" />
              <img src={github} className="social-media-icon" alt="github" />
              <img src={youtube} className="social-media-icon" alt="youtube" />
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