import { useEffect, useContext } from 'react';
import { ProjectsContext } from './projectGallery/ProjectsContext';

const PortfolioContainer = ({children}) => {
  const projectsContext = useContext(ProjectsContext);

  const handleSave = (value, key, projectName, newProjects) => {
    newProjects.map(newProject => {
      if (newProject.name === projectName) {
         newProject[key] = value;
      }
    });
    projectsContext.dispatch({newProjects});
  };

  useEffect(() => {
    const newProjects = [];
    const projectNameList = [];
    const files = require.context(`../../projects`, true);
    const fileKeys = files.keys();

    fileKeys.reduce((res, modulePath) => {
      const pathName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
      const projectFolders = pathName.split('/')[0];

      projectFolders !== "." && projectNameList.push(projectFolders);
    }, {});

    const uniqueProjectFolders = [...new Set(projectNameList)];

    uniqueProjectFolders.forEach(projectName => {
      const projectImageUrls = [];
      const projectVideoUrls = [];

      newProjects.push({
        name: projectName
      });

      fileKeys.map(file => {
        const fileEnd = file.split('.').slice(-1)[0];
        if (file.includes(projectName) && (fileEnd === 'jpg' || fileEnd === 'jpeg' || fileEnd === 'png')) {
          projectImageUrls.push(file.slice(2));
        }
        if (file.includes(projectName) && (fileEnd === 'json')) {
          import(`../../projects/${file.slice(2)}`)
          .then(res => {
            handleSave(res.default, 'data', projectName, newProjects);
          });
        }
        if (file.includes(projectName) && (fileEnd === 'mp4' )) {
          projectVideoUrls.push(file.slice(2));
        }
      });

      const getMedia = async (urlsList, tag) => {
        const results = await Promise.all(urlsList.map(async (file) => {
          const media = await import(`../../projects/${file}`)
          .then(res => res.default);
          file = media;
          return file
        }));
        handleSave(results, tag, projectName, newProjects);
      }
      getMedia(projectImageUrls, 'images');
      getMedia(projectVideoUrls, 'videos');
    });
  }, []);

  return (
    <div>
      {children}
    </div>
  )
}

export default PortfolioContainer;