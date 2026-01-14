import './contactMeBanner.scss';
import { Link, useLocation } from 'react-router-dom';

const ContactMeBanner = () => {
  const location = useLocation();
  
  // Hide banner on contact page
  if (location.pathname === '/contact' || location.pathname === '/blog') {
    return null;
  }

  return (
    <Link to="/contact" id="contact-me-banner">
      <div className="banner-content">
        <div className="banner-text-container">
          <span className="banner-badge">Limited Availability</span>
          <p className="banner-text">Taking 2 new client projects this month. Book free audit.</p>
        </div>
        <span className="banner-arrow">→</span></div>
    </Link>
  );
};

export default ContactMeBanner;
