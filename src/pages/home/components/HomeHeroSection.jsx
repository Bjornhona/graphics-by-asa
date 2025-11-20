import { Link } from "react-router-dom";
import "./homeHeroSection.scss";

const HomeHeroSection = () => {
  return (
    <div className="home-inner-content">
      <div className="home-inner-container">
        <div className="title-container">
          <h2>React/Next.js Developer & UI/UX Designer</h2>
          <Link to="/portfolio" className="title-button">
            <button>See my work</button>
          </Link>
        </div>
        <div>
          <h4>Building Premium Web Applications for Creators & Brands</h4>
          <p>
            Hi, I'm Åsa - a Barcelona-based{" "}
            <strong>React and Next.js Frontend Developer</strong> and{" "}
            <strong>UI/UX Designer</strong> with 7+ years of experience building
            visually stunning, with 7+ years of experience building visually
            stunning, high-converting websites for creators, coaches, and modern
            online businesses. With a 15-year background in design, I blend
            clean, premium aesthetics with fast, scalable code — helping brands
            look professional, increase conversions, and stand out online.
          </p>
          <p>
            I specialize in custom Next.js websites, landing pages, design
            systems, and smooth animations that elevate your brand beyond
            generic templates. If you want a website that looks beautiful, loads
            fast, and feels expensive — I’m your developer.
          </p>
        </div>
        <Link to="/portfolio" className="mobile-button">
          <button>See my work</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeroSection;
