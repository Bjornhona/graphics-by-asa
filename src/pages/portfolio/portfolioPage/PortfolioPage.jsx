import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectsContext } from '../projectGallery/ProjectsContext';
import StyledContent from '../../../components/styledContent/StyledContent';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import PortfolioContainer from '../PortfolioContainer';
import './portfolioPage.scss';
import linksIcon from './links-icon-1.png';

const PortfolioPage = () => {
  const { id } = useParams();
  const projectsContext = useContext(ProjectsContext);
  const projects = projectsContext.state.newProjects;
  const project = projects?.find(p => p.data.id === id);
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div id='portfolio-page'>
      <PortfolioContainer>
        <StyledContent title={project?.data.thumb.title}>
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={3000}
            bullets={false}
            mobileTouch={true}
          >
            {project?.images?.map((image, index) => (
              <div key={index} data-src={image} />
            ))}
          </AutoplaySlider>

          <div className='portfolio-page-info'>
            <div className='col'>
              {project?.data.page.subTitle && <h4>{project?.data.page.subTitle}</h4>}
              {project?.data.page.project && <p><strong>Project: </strong>{project?.data.page.project}</p>}
              {project?.data.page.programLanguages && <p><strong>Stack: </strong>{project?.data.page.programLanguages}</p>}
              {project?.data.page.tools && <p><strong>Tools: </strong>{project?.data.page.tools}</p>}
              {project?.data.page.design && <p><strong>Design: </strong>{project?.data.page.design}</p>}
              {project?.data.page.client && <p><strong>Client: </strong>{project?.data.page.client}</p>}
              {project?.data.page.github && <p><strong>Github: </strong>
                {project?.data.page.github.map((git, index) => (
                  <>
                    <a key={index} href={git.link} target='_blank' rel="noreferrer">{git.text}</a>
                    {index !== project?.data.page.github.length -1 ? ', ' : null}
                  </>
                ))}
              </p>}
            </div>
            <div className='col'>
              {project?.data.page.text && <p>{project?.data.page.text}</p>}
            </div>
          </div>

          <div className='skill-list'>
            {project?.data.tags && project?.data.tags.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>

          <div>
            {project?.data.page.demos && project?.data.page.demos.map((demo, index) => (
              <div className={'links-item'}>
                <img  src={linksIcon} alt='links icon' />
                <a key={index} href={demo.link} target='_blank' rel="noreferrer">{demo.text}</a>
              </div>
            ))}
          </div>
        </StyledContent>
      </PortfolioContainer>
    </div>
  )
}

export default PortfolioPage;
