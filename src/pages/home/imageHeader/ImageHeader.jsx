import './imageHeader.scss';
import FlowersImage from '../../../styles/images/FlowerPortfolio1.jpg';

const ImageHeader = () => {
  return (
    <div id='image-header'>
      <div className="body-image-over">
        <div className="image-scale-helper">
          <img src={FlowersImage} alt="flowers" />
        </div>
        <div className="body-image-text">
          <div className="inner-text">
            <h1>Graphics for your business</h1>
            <p>www.graphicsbyasa.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageHeader;