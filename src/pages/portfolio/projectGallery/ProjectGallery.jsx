import { useState, useEffect } from 'react';
import './projectGallery.scss';

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);

  const items = Array.from({ length: 15 }).map((_, index) => (
    <div key={index} className='grid-item'>
      <img
        src={`https://picsum.photos/200/${Math.floor(
          Math.random() * (300 - 200 + 1) + 200
        )}`}
        alt="whatever test"
      />
    </div>
  ));

  // const projects = importProjects(require.context('./projects', false, /\.(png|jpe?g|svg)$/));
  // const projects = importProjects(require.context('./projects/quoteGenerator', false, /^\.\/.*\.png$/));
  // const projects = importProjets(require.context('./img/projets',true,/\.jpg$/));

  useEffect(() => {
    const newProjects = [];
    const projectNameList = [];
    const files = require.context(`../../../projects`, true);
    const fileKeys = files.keys();

    fileKeys.reduce((res, modulePath) => {
      const pathName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
      const projectFolders = pathName.split('/')[0];
      projectNameList.push(projectFolders);
    }, {});

    const uniqueProjectFolders = [...new Set(projectNameList)];

    uniqueProjectFolders.forEach(projectName => {
      const projectImages = [];

      fileKeys.map(file => {
        if (file.includes(projectName)) {
          projectImages.push(file.slice(2));
        }
      });

      newProjects.push({
        name: projectName,
        images: projectImages  
      });
    });
    setProjects(newProjects);
  }, []);

  // console.log(projects);

  const getImage = (file) => {
    // console.log(file);
    import(`../../../projects/${file}`)
    .then(res => {
      // console.log(res.default)
      const Image = res.default;
        return <img src={Image} alt='some' />
        // return <Image />
    });
  }

  return (
    <div id='project-gallery'>
      <div className="container masonry">
        {/* {items} */}
        {projects.map((project, index) => {
          return (
            <div key={index} className='grid-item'>
              {getImage(project.images[0])}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectGallery;
