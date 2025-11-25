import './section4.scss';
import { numberOfYearsDeveloperExperience, numberOfYearsDesignExperience } from '../../../sharedConstants';

const WhyWorkWithMe = ({ text }) => {
  const formattedDescription =
    text.description
      ?.replace('{devYears}', numberOfYearsDeveloperExperience)
      ?.replace('{designYears}', numberOfYearsDesignExperience) ?? '';

  return (
    <div id="section4">
      <div className="experience-banner">
        <div className="experience-highlights">
          <div className="experience-highlight">
            <span className="years">{numberOfYearsDeveloperExperience}+</span>
            <span className="label">years in frontend</span>
          </div>
          <div className="experience-highlight">
            <span className="years">{numberOfYearsDesignExperience}+</span>
            <span className="label">years in design</span>
          </div>
        </div>
        <div className="experience-content">
          <h2>{text.title}</h2>
          <p>{formattedDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default WhyWorkWithMe;
