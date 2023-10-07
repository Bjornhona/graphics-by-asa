import './smallImageHeader.scss';
import FlowersImage from '../../../styles/images/FlowerPortfolio1.jpg';

const SmallImageHeader = () => {
  return (
    <div className="image-header-reference">
    <div id="body-image-over">
      <div className="image-scale-helper">
        <img src={FlowersImage} alt="flowers" />
      </div>
      <div className="body-image-text">
        <div className="inner-text">
          <h1>FRONTEND DEVELOPER & UX/UI DESIGNER</h1>
          <p>www.graphicsbyasa.com</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SmallImageHeader;
