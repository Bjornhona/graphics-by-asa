import { useState } from 'react';
import './projectGallery.scss';

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);

  const items = Array.from({ length: 15 }).map((_, index) => (
    <div key={index} className='grid-item'>
      <img
        src={`https://picsum.photos/200/${Math.floor(
          Math.random() * (300 - 200 + 1) + 200
        )}`}
        // style={{ width: "100%", height: "50%" }}
        alt="whatever test"
      />
    </div>
  ));
  // console.log(items);

  // const importProjects = (r) => {
    // return r.keys().map(r);
    // return r.keys().forEach((key) => (cache1[key] = r(key)));
  // }

  // const projects = importProjects(require.context('./projects', false, /\.(png|jpe?g|svg)$/));
  // const projects = importProjects(require.context('./projects/quoteGenerator', false, /^\.\/.*\.png$/));
  // const projects = importProjets(require.context('./img/projets',true,/\.jpg$/));

  const importProjects = () => {
    const projectNameList = ['quoteGenerator'];

    projectNameList.forEach(projectName => {
      let projectImages = [];
      // const projects = importProjects(require.context('./projects/quoteGenerator', false,  /\.(png|jpe?g|svg)$/));
      // const projects = importProjects(require.context(`./projects/${projectName}/`, false,  /\.(png|jpe?g|svg)$/));
      // const fs = require('fs');
      // const dir = `./projects/${projectName}`;
      // fs.readdir(dir, (err, files) => {
      //   console.log(files.length);
      // });
      import(`./projects/${projectName}/1.png`)
        .then(res => {
          // console.log(res.default);
          projectImages.push(res.default);
        });
      
      // setProjects({
      //   ...projects,
      //   [projectName]: {
      //     images: projectImages
      //   }
      // });
      console.log(projectImages);
      let newProjects = [...projects];
      if (projects?.find(p => p.name === projectName)?.length < 1) {
        newProjects = [...projects, {name: projectName}];
        console.log(newProjects);
      }
      const getProject = newProjects?.length > 0 ? newProjects.find(p => p.name === projectName) : undefined;
      console.log(getProject);
      // getProject[0] = {...getProject, images: projectImages}
      // console.log(newProjects);
    });
  }
  importProjects();

  // console.log(projects);

  return (
    <div id='project-gallery'>
      <div className="container masonry">
        {items}
      </div>
    </div>
  )
}

export default ProjectGallery;
