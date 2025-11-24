import "./section2.scss";

const ServicePackages = ({text}) => {
  return (
    <div id="section2">
      <h3>{text.title}</h3>
      <p className="subtitle">{text.subtitle}</p>
      <div className="packages-grid">
        {text.packages.map((pack) => (
          <div key={pack.title} className="package-card">
            <h3>{pack.title}</h3>
            <div className="package-price">{pack.price}</div>
            <div className="package-description">
              <span className="includes-label">Includes:</span>
              <p>{pack.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicePackages;
