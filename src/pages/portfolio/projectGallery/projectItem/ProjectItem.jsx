import './projectItem.scss';
import quoteOfTheDay from '../projects/quoteGenerator/QuoteOfTheDay.png';

const ProjectItem = () => {
  return (
    <div id='project-item'>
      <img src={quoteOfTheDay} alt={'quote generator'} />
    </div>
  )
}

export default ProjectItem;
