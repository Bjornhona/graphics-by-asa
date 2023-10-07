import StyledContent from '../../components/styledContent/StyledContent';
import './resume.scss';
import SmallImageHeader from './smallImageHeader/SmallImageHeader';

const Resume = () => {
  return (

    <div id="resume">
      <StyledContent title='resume'>
        <SmallImageHeader />
        <div className="home-inner-content">
          <div className="home-inner-container">
            <h1>Some title</h1>
            <div>
              <p>What strategy does your business use in order to stand out in a tough market? There are plenty of interesting and well represented companies out there. One of the most proven solutions is to make sure that you are present with your own attractive and professional graphic material and that make you stand out from the crowd.</p>
              <p>I have worked in particular with creating websites and branding for mainly real estate and financial companies who quickly need to create an interesting image and mark their breakthrough on the market and in front of investors. I have discovered a high demand for fast and simple products at affordable prices to meet the thirsty needs of my customers. Therefore, get in touch with me for more information about how I can help you achieve your goals. And do visit my portfolio to have a look at my recent work.</p>
            </div>
          </div>
        </div>
      </StyledContent>
    </div>
  )
}

export default Resume;