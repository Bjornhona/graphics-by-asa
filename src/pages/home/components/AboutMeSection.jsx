import { Link } from "react-router-dom";
import {
  numberOfYearsDeveloperExperience,
  numberOfYearsDesignExperience,
} from "../../../sharedConstants";
import "./aboutMeSection.scss";

const AboutMeSection = ({ text }) => {
  const formattedDescription =
    text.intro
      ?.replace("{devYears}", numberOfYearsDeveloperExperience)
      ?.replace("{designYears}", numberOfYearsDesignExperience) ?? "";

  const portfolioButton = (className) => (
    <Link to={text.cta.link} className={className}>
      <button>{text.cta.text}</button>
    </Link>
  );

  return (
    <div className="home-inner-content">
      <div className="home-inner-container">
        <div className="title-container">
          <h2>React/Next.js Developer & UI/UX Designer</h2>
          {portfolioButton('title-button')}
        </div>
        <div>
          <h4>Building Premium Web Applications for Creators & Brands</h4>
          <p>{formattedDescription}</p>
          <p>{text.description}</p>
        </div>
        {portfolioButton('portfolio-button')}
      </div>
    </div>
  );
};

export default AboutMeSection;
