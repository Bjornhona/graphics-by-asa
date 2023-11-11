import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './projectItem.scss';
import { ProjectsContext } from '../ProjectsContext';

const ProjectItem = ({projectId}) => {
  const projectsContext = useContext(ProjectsContext);
  const projects = projectsContext.state.newProjects;
  const project = projects.find(p => p.data.id === projectId);

  return (
    <div id='project-item'>
      {project && <Link to={`/portfolio/${project.data?.id}`}>
        <div className="overlay">
          <div className="overlay-text">
            <h5>{project.data?.thumb.title}</h5>
            <span className="divider"></span>
            <p>{project.data?.thumb.text}</p>
          </div>
        </div>
        {project.images && <img src={project.images[0]} alt={project.images[0]} />}
      </Link>}
    </div>
  )
}

export default ProjectItem;
