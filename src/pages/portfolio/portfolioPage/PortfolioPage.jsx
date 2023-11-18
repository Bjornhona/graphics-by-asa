import { useParams } from 'react-router-dom';
import { useRef, useContext } from 'react';
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
  const video = useRef(null);
  const projectsContext = useContext(ProjectsContext);
  const projects = projectsContext.state.newProjects;
  const project = projects?.find(p => p.data?.id === id);
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  let linksTo;
  if (projects) {
    const projectIndex = projects && projects.findIndex(p => p.data?.id === id);
    let prevProjectId;
    let nextProjectId;

    if (projectIndex === 0) {
      prevProjectId = projects[projectIndex + 1].data.id;
    } else if (projectIndex < projects.length - 1) {
      prevProjectId = projects[projectIndex + 1].data.id;
      nextProjectId = projects[projectIndex - 1]?.data.id;
    } else {
      nextProjectId = projects[projectIndex - 1].data.id;
    }

    const getLinkToPrev = () => {
      if (prevProjectId) {
        return {
          text: projects[projectIndex + 1].data.thumb.title,
          link: `/portfolio/${prevProjectId}`
        }
      }
    }
    const getLinkToNext = () => {
      if (nextProjectId) {
        return {
          text: projects[projectIndex - 1].data.thumb.title,
          link: `/portfolio/${nextProjectId}`
        }
      }
    }
    linksTo = {
      prev: getLinkToPrev(),
      next: getLinkToNext()
    }
  }
  // project && console.log(project);
  const handleVideoClick = (e) => {
    // e.target.play()
    // console.log(e.target);
    console.log(video.current);
    video.current.play();
    // const newProject = {...project}
    // newProject?.videos[0].enabled = true;

    // console.log(e);
    // console.log(project.videos[0]);
    // return <video src={project.videos[0]} controls />
    // return <video>
    //     <source src={project.videos[0]} type="video/mp4" width="800" height="400" controls />
    //     Sorry, your browser doesn't support videos.
    //  </video>
  }

  return (
    <div id='portfolio-page'>
      <div className="jumbotron-video-wrapper">
        <video ref={video} src={project?.videos[0]} controls />
        {/* <video ref={video}>
          <source src={project?.videos[0]} type="video/mp4" controls />
        </video> */}
      </div>
      <PortfolioContainer>
        <StyledContent title={project?.data.thumb.title} linksTo={linksTo}>
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={3000}
            bullets={false}
            mobileTouch={true}
          >
            {project?.videos.length < 1
              ? project?.images?.map((image, index) => (
                <div key={index} data-src={image} />
              ))
              : project?.images?.map((image, index) => (
                index === project?.images.length - 1
                  ? <div className='clickable-image' key={index} data-src={image} onClick={(e) => handleVideoClick(e)} />
                  : <div key={index} data-src={image} />
              ))
            }
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
                  <div key={index}>
                    <a href={git.link} target='_blank' rel="noreferrer">{git.text}</a>
                    {index !== project?.data.page.github.length -1 ? ', ' : null}
                  </div>
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
              <div key={index} className={'links-item'}>
                <img src={linksIcon} alt='links icon' />
                <a href={demo.link} target='_blank' rel="noreferrer">{demo.text}</a>
              </div>
            ))}
          </div>
        </StyledContent>
      </PortfolioContainer>
    </div>
  )
}

export default PortfolioPage;
