import { useState, useRef, useEffect } from 'react';
import {
  Outlet,
  NavLink,
} from "react-router-dom";
import './layout.scss';
import logo from '../logo2.svg';
import { ReactComponent as BurgerIcon } from './burger-icon.svg';
import { ReactComponent as CloseIcon } from './close-button.svg';
import { socialMediaIcons } from './social_media';
import { navigation } from './navigation';
import 'tarteaucitronjs';

const Layout = () => {
  const [showNav, setShowNav] = useState(false);
  const year = new Date().getFullYear();
  const ref = useRef(null);

  // TarteauCitron Open Source Cookie Banner
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "/tarteaucitron/tarteaucitron.min.js";
    // script.async = true;
    // script.onload = () => {
      window.tarteaucitron.init({
        privacyUrl: "/privacy-policy" /* Privacy policy url */,
        bodyPosition: "top" /* top to bring it as first element for accessibility */,
        hashtag: "#tarteaucitron" /* Open the panel with this hashtag */,
        cookieName: "tarteaucitron" /* Cookie name */,
        orientation: "middle" /* Banner position (top - middle - bottom) */,
        groupServices: true /* Group services by category */,
        showDetailsOnClick: true /* Click to expand the description */,
        serviceDefaultState: "wait" /* Default state (true - wait - false) */,
        showAlertSmall: false /* Show the small banner on bottom right */,
        cookieslist: false /* Show the cookie list in a mini banner */,
        cookieslistEmbed: false /* Show the cookie list on the control panel */,
        closePopup: true /* Show a close X on the banner */,
        showIcon: true /* Show cookie icon to manage cookies */,
        // "iconSrc": "🍪", /* Optionnal: URL or base64 encoded image */
        iconPosition: "BottomRight" /* Position of the cookie (BottomRight - BottomLeft - TopRight - TopLeft) */,
        adblocker: false /* Show a Warning if an adblocker is detected */,
        DenyAllCta: true /* Show the deny all button */,
        AcceptAllCta: true /* Show the accept all button */,
        highPrivacy: true /* HIGHLY RECOMMANDED Disable auto consent */,
        alwaysNeedConsent: false /* Ask the consent for "Privacy by design" services */,
        handleBrowserDNTRequest: false /* If Do Not Track == 1, disallow all */,
        removeCredit: true /* Remove credit link */,
        moreInfoLink: true /* Show more info link */,
        useExternalCss: false /* Expert mode: do not load the tarteaucitron.css file */,
        useExternalJs: false /* Expert mode: do not load the tarteaucitron js files */,
        //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */
        // readmoreLink: "" /* Change the default readmore link */,
        mandatory: true /* Show a message about mandatory cookies */,
        mandatoryCta: false /* Show the disabled accept button when mandatory on */,
        //"customCloserId": "", /* Optional a11y: Custom element ID used to open the panel */
        googleConsentMode: true /* Enable Google Consent Mode v2 for Google ads & GA4 */,
        bingConsentMode: true /* Enable Bing Consent Mode for Clarity & Bing Ads */,
        softConsentMode: false /* Soft consent mode (consent is required to load the services) */,
        dataLayer: false /* Send an event to dataLayer with the services status */,
        serverSide: false /* Server side only, tags are not loaded client side */,
        partnersList: true /* Show the number of partners on the popup/middle banner */,
      });
      window.tarteaucitron.user.gtagUa = "G-D8ZL6SL0B0";
      (window.tarteaucitron.job = window.tarteaucitron.job || []).push(
        "googleanalytics",
        // "gcmadstorage",
        "gcmanalyticsstorage",
        "gcmfunctionality",
        "gcmpersonalization",
        // "gcmadsuserdata",
        "gcmsecurity"
      );
    // };
    // document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowNav(false);
      }
    }

    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  const MyLogo = () =>
    <a href="https://www.graphicsbyasa.com/">
      <div className="logo-container"><img src={logo} className="App-logo" alt="logo" /></div>
    </a>;

  const MyNavigation = ({innerRef}) =>
    <nav ref={innerRef} className={!showNav ? 'show-nav-navigation' : null}>
      {navigation.map((nav, index) => 
        <NavLink to={nav.link} key={index} onClick={() => setShowNav(false)}>{nav.name}</NavLink>)}
      <CloseIcon onClick={() => setShowNav(false)} />
    </nav>;

  const FollowMe = () =>
    <div className="follow-me">
      <h5>Follow me</h5>
      <div className="social-media-icons">
        {socialMediaIcons.map((social, index) =>
          <a href={social.link} target="_blank" rel="noreferrer" key={index}>
            <img src={social.icon} key={index} className="social-media-icon" alt={"Social Media Icon"} />
          </a>
        )}
      </div>
    </div>;

  const Copyrights = () =>
    <div className={showNav ? 'header-bottom nav-bottom' : 'header-bottom'}>
      <p>{year} | All rights reserved | <a href="https://www.graphicsbyasa.com">Graphics by Åsa</a></p>
    </div>;

  return (
    <div id="layout">
      {showNav && <MyNavigation innerRef={ref} />}
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