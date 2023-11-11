import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectsContext } from '../projectGallery/ProjectsContext';
import StyledContent from '../../../components/styledContent/StyledContent';

const PortfolioItem = () => {
  const { id } = useParams();
  const projectsContext = useContext(ProjectsContext);
  const projects = projectsContext.state.newProjects;
  const project = projects.find(p => p.data.id === id);

  console.log(project);

  return (
    <div id='portfolio-item'>
      <StyledContent title={project.data.thumb.title}>
        <p>Hello</p>
      </StyledContent>
    </div>
  )
}

export default PortfolioItem;
