import './trustRowSection.scss';
import { numberOfYearsDeveloperExperience, numberOfYearsDesignExperience } from '../../../sharedConstants';

const TrustRowSection = ({ text }) => {
  const formattedDescription =
  text.text
    ?.replace('{devYears}', numberOfYearsDeveloperExperience)
    ?.replace('{designYears}', numberOfYearsDesignExperience) ?? '';

  // Duplicate content for seamless loop
  const content = Array(6).fill(formattedDescription);

  return (
    <div id="trust-row-section">
      <div className="trust-banner-wrapper">
        <div className="trust-banner">
          {content.map((item, index) => (
            <span key={index} className="trust-item">
              {item}
            </span>
          ))}
        </div>
        <div className="trust-banner trust-banner-duplicate">
          {content.map((item, index) => (
            <span key={`duplicate-${index}`} className="trust-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustRowSection;
