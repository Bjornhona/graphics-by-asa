import StyledContent from '../../components/styledContent/StyledContent';
import './resume.scss';
import SmallImageHeader from './smallImageHeader/SmallImageHeader';

const Resume = () => {
  return (

    <div id="resume">
      <StyledContent title='resume'>
        <SmallImageHeader />
        <div className="home-inner-content">
          <div className={'left-info-banner'}>
            <h5>Contact</h5>
            <a href='mailto:info@graphicsbyasa.com'>info@graphicsbyasa.com</a>
            {/* <a href='https://www.graphicsbyasa.com'>www.graphicsbyasa.com</a> */}
            {/* <a href='https://github.com/Bjornhona'>https://github.com/Bjornhona</a> */}
            <p>+34 - 676 49 69 19</p>

            <h5>Areas of expertise</h5>
            <p>Web Development · Graphic Design · Web Design · Product Design · UX/UI</p>

            <h5>Programming skills</h5>
            <p>Javascript · Node.js · Express · React · React Native · Python · C · Flask · SQL · MongoDB · Jest · Node.js · ES6 · HTML5 · CSS</p>

            <h5>Software skills</h5>
            
            <h5>Language skills</h5>
            
            <button className="inverted">Download CV</button>
          </div>
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