import { Link } from 'react-router-dom';
import './heroSection.scss';

const HeroSection = ({title, subtitle, buttonText, buttonLink}) => {
  return (
    <div id="hero-section">
      <div className="body-image-over inner-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link to={buttonLink}>
          <button>{buttonText}</button>
        </Link>
      </div>
      <div className="background-image"></div>
    </div>
  )
}

export default HeroSection;
