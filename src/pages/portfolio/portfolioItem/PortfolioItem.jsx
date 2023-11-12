import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectsContext } from '../projectGallery/ProjectsContext';
import StyledContent from '../../../components/styledContent/StyledContent';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import PortfolioContainer from '../PortfolioContainer';
import './portfolioItem.scss';
import linksIcon from './links-icon-1.png';

const PortfolioItem = () => {
  const { id } = useParams();
  const projectsContext = useContext(ProjectsContext);
  const projects = projectsContext.state.newProjects;
  const project = projects?.find(p => p.data.id === id);

  project && console.log(project);
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div id='portfolio-item'>
      <PortfolioContainer>
        <StyledContent title={project?.data.thumb.title}>
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={3000}
          >
            {project?.images?.map((image, index) => (
              <div key={index} data-src={image} />
            ))}
          </AutoplaySlider>
          
          <div className='portfolio-item-info'>
            <div className='col'>
              {project?.data.page.subTitle && <h4>{project?.data.page.subTitle}</h4>}
              {project?.data.page.project && <p><strong>Project: </strong>{project?.data.page.project}</p>}
              {project?.data.page.programLanguages && <p><strong>Program languages: </strong>{project?.data.page.programLanguages}</p>}
              {project?.data.page.design && <p><strong>Design: </strong>{project?.data.page.design}</p>}
              {project?.data.page.github.text && <p><strong>Github: </strong><a href={project?.data.page.github.link} target='_blank' rel="noreferrer">{project?.data.page.github.text}</a></p>}
            </div>
            <div className='col'>
              {project?.data.page.text && <p>{project?.data.page.text}</p>}
            </div>
          </div>

          <div className='skill-list'>
            {project?.data.tags.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>

          {project?.data.page.demos.map((demo, index) => (
            <div className={'links-item'}>
              <img  src={linksIcon} alt='links icon' />
              <a key={index} href={demo.link} target='_blank' rel="noreferrer">{demo.text}</a>
            </div>
          ))}
        </StyledContent>
      </PortfolioContainer>
    </div>
  )
}

export default PortfolioItem;
