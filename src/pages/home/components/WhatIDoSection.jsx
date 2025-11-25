import "./whatIDoSection.scss";
import { Link } from "react-router-dom";

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
    </div>
  );
};

export default WhatIDoSection;
