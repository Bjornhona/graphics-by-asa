import "./home.scss";
import { useState, useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import StyledContent from "../../components/styledContent/StyledContent";
import ConversionRateImage from "./imageButtons/Conversion-rates2.png";
import MoreSalesImage from "./imageButtons/More-sales2.png";
import MoreExposureImage from "./imageButtons/More-exposure2.png";
import Separator from "../../components/separator/Separator";
import Testimonials from "./testimonials/Testimonials";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageHeader from "./imageHeader/ImageHeader";
import HomeHeroSection from "./components/HomeHeroSection";

const Home = () => {
  const localRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const onScroll = useCallback(async () => {
    const topPos =
      (await localRef.current.getBoundingClientRect().top) + window.pageYOffset;
    const scrollPos = window.scrollY + window.innerHeight;

    if (topPos < scrollPos) {
      setAnimate(true);
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div id="home">
      <StyledContent title="home">
        <ImageHeader />
        <HomeHeroSection />

        <div className="home-kpi-container">
          <div className="home-kpi">
            <div className="home-kpi-image">
              <img src={ConversionRateImage} alt="Conversion rate icon" />
            </div>
            <h3>UI/UX Design</h3>
            <p>
              15+ years turning complex ideas into clean, modern,
              conversion-focused interfaces.
            </p>
          </div>
          <div className="home-kpi">
            <div className="home-kpi-image">
              <img src={MoreSalesImage} alt="More sales icon" />
            </div>
            <h3>Frontend Development</h3>
            <p>
              7+ years building fast, scalable frontend apps with Next.js,
              React, and Tailwind CSS.
            </p>
          </div>
          <div className="home-kpi">
            <div className="home-kpi-image">
              <img src={MoreExposureImage} alt="More exposure icon" />
            </div>
            <h3>Expertise</h3>
            <p>
              Specializing in: Next.js · React · TypeScript · Tailwind CSS ·
              Shadcn/UI · CSS Modules · HTML5 · CSS3 · SASS · Framer Motion
            </p>
          </div>
        </div>

        <ImageGallery />

        <div className="home-inner-container__centered">
          <div className="home-inner-text">
            <h3>Get in touch</h3>
            <p>
              Make your business stand out with professional and attractive
              graphic design!
            </p>
          </div>
          <Link to="/contact">
            <button>Contact me</button>
          </Link>
        </div>

        <Separator />

        <Testimonials animate={animate} localRef={localRef} />
      </StyledContent>
    </div>
  );
};

export default Home;
