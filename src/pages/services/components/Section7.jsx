import "./section7.scss";
import { Link } from "react-router-dom";

const FinalCTA = ({ text }) => {
  return (
    <div id="section7">
      <div className="cta-banner">
        <div>
          <h3>{text.title}</h3>
          {text.descriptions.map(description => <p>{description}</p>)}
        </div>
        <Link to={text.buttonLink}>
          <button>{text.buttonText}</button>
        </Link>
        <p>Based in Barcelona 🇪🇸 | Serving clients worldwide 🌍</p>
      </div>
    </div>
  );
};

export default FinalCTA;
