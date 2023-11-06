import { useState, useEffect } from 'react';
import './projectGallery.scss';

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [images, setImages] = useState([]);

  // const projects = importProjects(require.context('./projects', false, /\.(png|jpe?g|svg)$/));
  // const projects = importProjects(require.context('./projects/quoteGenerator', false, /^\.\/.*\.png$/));
  // const projects = importProjets(require.context('./img/projets',true,/\.jpg$/));

  useEffect(() => {
    const newProjects = [];
    const projectNameList = [];
    const files = require.context(`../../../projects`, true);
    const fileKeys = files.keys();
    const projectImages = [];

    fileKeys.reduce((res, modulePath) => {
      const pathName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
      const projectFolders = pathName.split('/')[0];
      projectNameList.push(projectFolders);
    }, {});

    const uniqueProjectFolders = [...new Set(projectNameList)];

    uniqueProjectFolders.forEach(projectName => {
      const projectImages = [];

      fileKeys.map(file => {
        const fileEnd = file.split('.').slice(-1)[0];
        if (file.includes(projectName) && (fileEnd === 'jpg' || fileEnd === 'jpeg' || fileEnd === 'png')) {
          projectImages.push(file.slice(2));
        }
      });

      newProjects.push({
        name: projectName,
        images: projectImages  
      });
    });

    const getImages = async () => {
      await newProjects.reverse().forEach(async project => {
        const file = project.images[0];
        console.log(file);
          await import(`../../../projects/${file}`)
          .then(res => {
            console.log(res.default);
            projectImages.push(res.default);
          });
      });
    }
    getImages()
    .then(() => {
      setImages(projectImages);
    })

    setProjects(newProjects);
  }, []);

// console.log(images);
// console.log(projects);

  return (
    <div id='project-gallery'>
      <div className="masonry">
        {images.map((image, index) => {
          return (
            <div key={index} className='grid-item'>
              <img src={image} alt='some' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectGallery;
