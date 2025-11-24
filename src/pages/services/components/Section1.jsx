import "./section1.scss";

const AboutMyServices = ({text}) => {
  return (
    <div id="section1">
      <h3>{text.title}</h3>
      <p className="subtitle">{text.subtitle}</p>
      <div className="services-grid">
        {text.services.map((service) => (
          <div key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutMyServices;
