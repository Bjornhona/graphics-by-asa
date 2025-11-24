import './section4.scss';

const WhyWorkWithMe = ({ text }) => {
  const calculateYears = (startDateString) => {
    const startDate = new Date(startDateString);
    const today = new Date();
    const diffInMs = today.getTime() - startDate.getTime();
    const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    return Math.max(0, Math.floor(years));
  };

  const numberOfYearsDeveloperExperience = calculateYears('2018-11-01');
  const numberOfYearsDesignExperience = calculateYears('2010-01-01');

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
