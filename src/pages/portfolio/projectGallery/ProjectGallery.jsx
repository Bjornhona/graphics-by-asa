import { useState, useEffect, useContext } from 'react';
import { ProjectsContext } from './ProjectsContext';
import './projectGallery.scss';
import ProjectItem from './projectItem/ProjectItem';

const ProjectGallery = ({selectedTag}) => {
  // const [projects, setProjects] = useState([]);
  const projectsContext = useContext(ProjectsContext);
  const projects = projectsContext.state.newProjects;
  
  console.log(projectsContext);
  // console.log(projects);

  const handleSave = (value, key, projectName, newProjects) => {
    newProjects.map(newProject => {
      if (newProject.name === projectName) {
         newProject[key] = value;
      }
    });
    // setProjects(newProjects);
    projectsContext.dispatch({newProjects});
  };

  useEffect(() => {
    const newProjects = [];
    const projectNameList = [];
    const files = require.context(`../../../projects`, true);
    const fileKeys = files.keys();

    fileKeys.reduce((res, modulePath) => {
      const pathName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
      const projectFolders = pathName.split('/')[0];

      projectFolders !== "." && projectNameList.push(projectFolders);
    }, {});

    const uniqueProjectFolders = [...new Set(projectNameList)];

    uniqueProjectFolders.forEach(projectName => {
      const projectImageUrls = [];

      newProjects.push({
        name: projectName
      });

      fileKeys.map(file => {
        const fileEnd = file.split('.').slice(-1)[0];
        if (file.includes(projectName) && (fileEnd === 'jpg' || fileEnd === 'jpeg' || fileEnd === 'png')) {
          projectImageUrls.push(file.slice(2));
        }
        if (file.includes(projectName) && (fileEnd === 'json' )) {
          import(`../../../projects/${file.slice(2)}`)
          .then(res => {
            handleSave(res.default, 'data', projectName, newProjects);
          });
        }
      });

      const getImages = async () => {
        const results = await Promise.all(projectImageUrls.map(async (file) => {
          const image = await import(`../../../projects/${file}`)
          .then(res => res.default);
          file = image;
          return file
        }));
        handleSave(results, 'images', projectName, newProjects);
      }
      getImages()
    });
  }, []);

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
