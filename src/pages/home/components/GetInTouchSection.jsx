import { Link } from "react-router-dom";

const GetInTouchSection = () => {
  return (
    <div id="get-in-touch-section" className="home-inner-container__centered">
      <div className="home-inner-text">
        <h3>Get in touch</h3>
        <p>
          Make your business stand out with professional and attractive graphic
          design!
        </p>
      </div>
      <Link to="/contact">
        <button>Contact me</button>
      </Link>
    </div>
  );
};

export default GetInTouchSection;
