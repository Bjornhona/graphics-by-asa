import { useContext } from 'react';
import { ProjectsContext } from './ProjectsContext';
import './projectGallery.scss';
import ProjectItem from './projectItem/ProjectItem';

const ProjectGallery = ({selectedTag}) => {
  const projectsContext = useContext(ProjectsContext);
  const projects = projectsContext.state.newProjects;

  const hasSelectedTag = (project) => {
    if (selectedTag === 'All') {
      return true;
    } else {
      return project.data.tags.includes(selectedTag);
    }
  }

  return (
    <div id='project-gallery'>
      <div className="masonry">
        {projects && projects.length > 0 && [...projects].reverse().map((project, index) => {
          return (
            hasSelectedTag(project) && <ProjectItem key={index} projectId={project.data?.id} />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectGallery;
