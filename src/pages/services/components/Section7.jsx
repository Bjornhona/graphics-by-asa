import './section7.scss';
import { Link } from 'react-router-dom';

const FinalCTA = ({ text }) => {
  return (
    <div id="section7">
      <div className="cta-banner">
        <h2>{text.title}</h2>
        <p>{text.description}</p>
        <Link to={text.buttonLink} className="cta-link">
          <button className="cta-button">{text.buttonText}</button>
        </Link>
      </div>
    </div>
  )
}

export default FinalCTA;
