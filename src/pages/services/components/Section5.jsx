import './section5.scss';

const HowItWorks = ({ text }) => {
  const formatStep = (step, index) => {
    const [titlePart, ...rest] = step.split(' - ');
    const numberMatch = titlePart.match(/\d+/);
    const number = numberMatch ? numberMatch[0] : index + 1;
    const title = titlePart.replace(/^\d+\.\s*/, '').trim();
    const description = rest.join(' - ').trim();

    return {
      number,
      title: title || `Step ${index + 1}`,
      description,
    };
  };

  return (
    <div id="section5">
      <div className="section-head">
        <h3>{text.title}</h3>
        <p className="subtitle">Clear, collaborative steps so you know exactly what happens from the first call to launch day.</p>
      </div>
      <div className="steps-grid">
        {text.description.map((step, index) => {
          const formattedStep = formatStep(step, index);
          return (
            <div className="step-card" key={index}>
              <div className="step-number">{formattedStep.number}</div>
              <div className="step-body">
                <h3>{formattedStep.title}</h3>
                <p>{formattedStep.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default HowItWorks;
