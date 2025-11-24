import "./section3.scss";

const PortfolioHighlights = ({text}) => {
  return (
    <div id="section3">
      <h3>{text.title}</h3>
      <p className="subtitle">{text.subtitle}</p>
      <div className="projects-grid">
        {text.projects.map((project) => (
          <div key={project.title} className="project-card">
            {project.image && <img src={project.image} alt={project.title} className="project-image" />}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioHighlights;
