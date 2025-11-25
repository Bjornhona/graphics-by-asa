import './whatIDoSection.scss';
import { Link } from 'react-router-dom';
import ConversionRateImage from "../imageButtons/Conversion-rates2.png";
import MoreSalesImage from "../imageButtons/More-sales2.png";
import MoreExposureImage from "../imageButtons/More-exposure2.png";

const WhatIDoSection = ({ text }) => {
  return (
    <div id="what-i-do-section">
      <h3>{text.title}</h3>
      <p>{text.description}</p>
      <div className="services-cards">
        {text.cards.map((card, index) => (
          <div key={index} className="service-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      {text.cta && (
        <div className="cta-container">
          <Link to={text.cta.link}>
            <button>{text.cta.text}</button>
          </Link>
        </div>
      )}

      {/* <div className="home-kpi-container">
        <div className="home-kpi">
          <div className="home-kpi-image">
            <img src={ConversionRateImage} alt="Conversion rate icon" />
          </div>
          <h3>UI/UX Design</h3>
          <p>
            15+ years turning complex ideas into clean, modern,
            conversion-focused interfaces.
          </p>
        </div>
        <div className="home-kpi">
          <div className="home-kpi-image">
            <img src={MoreSalesImage} alt="More sales icon" />
          </div>
          <h3>Frontend Development</h3>
          <p>
            7+ years building fast, scalable frontend apps with Next.js,
            React, and Tailwind CSS.
          </p>
        </div>
        <div className="home-kpi">
          <div className="home-kpi-image">
            <img src={MoreExposureImage} alt="More exposure icon" />
          </div>
          <h3>Expertise</h3>
          <p>
            Specializing in: Next.js · React · TypeScript · Tailwind CSS ·
            Shadcn/UI · CSS Modules · HTML5 · CSS3 · SASS · Framer Motion
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default WhatIDoSection;
