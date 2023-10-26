import './smallImageHeader.scss';
import MeImage from '../../../styles/images/Image-me1.jpg';

const SmallImageHeader = () => {

  const bodyBoxes = () => {
    return (
      <div className="body-boxes">
        <div className={'left-info-banner'}>
          <img src={MeImage} alt='me' />
          <h5>Åsa Eriksson</h5>
          <h6>Frontend Developer & UX/UI Designer</h6>
          <button className="inverted">Download CV</button>
        </div>
        <div className="inner-text">
          <h5>Frontend developer & UX/UI designer</h5>
          <p>I am a Frontend Developer, specialized in React, with a solid background in Industrial Engineering, Graphic Design, Product Design and Web Design. After working as a web design freelancer I continue to develop my web and programming skills at Hexad SL since many years. I consider myself a self-organized person, eager to learn with senior management skills, fluent in Swedish, Spanish and English.</p>
        </div>
      </div>
    )
  }

  return (
    <div id="image-header-reference">
      <div className="hidden-to-get-height">
        {bodyBoxes()}
      </div>
      <div className="body-image-over">
        {bodyBoxes()}
      </div>
    </div>
  )
}

export default SmallImageHeader;
