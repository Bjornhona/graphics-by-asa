import "./techStackSection.scss";

const TechStackSection = ({ text }) => {
  return (
    <div id="tech-stack-section">
      <div className="section-header">
        <h3>{text.title}</h3>
        <p>{text.description}</p>
      </div>
      <div className="tech-stack-grid">
        {text.content.map((item, index) => (
          <div key={index} className="tech-category-card">
            <h4>{item.title}</h4>
            <div className="tech-badges">
              {item.description.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {text.question && (
        <div className="why-stack-section">
          <h4>{text.question}</h4>
          <div className="answer-badges">
            {text.answer.map((benefit, index) => (
              <span key={index} className="answer-badge">
                {benefit}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechStackSection;
