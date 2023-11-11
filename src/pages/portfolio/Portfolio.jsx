import { useState, useEffect } from 'react';
import './portfolio.scss';
import { tagData } from './tagData';
import ProjectGallery from './projectGallery/ProjectGallery';

const Portfolio = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const newState = [];
    newState.push({name: 'All', isSelected: true});
    tagData.slice(1).forEach(tag => {
      newState.push({ name: tag.name, isSelected: false });
    });
    setState(newState);
  }, []);

  const onSelectTag = (tag) => {
    let newState = [];
    tagData.forEach(s => {
      if (s.name === tag.name) {
        newState.push({
          name: s.name,
          isSelected: true
        });
      } else {
        newState.push({ ...s, isSelected: false});
      };
    });
    setState(newState);
  };

  const selectedTag = state.length > 0 && state.find(s => s.isSelected).name;

  return (
    <div id="portfolio">
      <ul className='tag-banner'>
        {state.map((tag, index) => {
          return <li key={index} className={tag.isSelected ? 'selected' : undefined} onClick={() => onSelectTag(tag)}><p>{tag.name}</p></li>
        })}
      </ul>
      {state.length > 0 && <ProjectGallery selectedTag={selectedTag} />}
    </div>
  )
}

export default Portfolio;