import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectsContext } from '../projectGallery/ProjectsContext';
import StyledContent from '../../../components/styledContent/StyledContent';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import PortfolioContainer from '../PortfolioContainer';
import './portfolioItem.scss';

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
          <p>Hello</p>
        </StyledContent>
      </PortfolioContainer>
    </div>
  )
}

export default PortfolioItem;
