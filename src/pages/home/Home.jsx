import "./home.scss";
import { useState, useLayoutEffect, useRef, useCallback } from "react";
import StyledContent from "../../components/styledContent/StyledContent";
import Separator from "../../components/separator/Separator";
import TestimonialsSection from "./components/TestimonialsSection";
import ImageGallery from "./imageGallery/ImageGallery";
import MainHeroSection from "./components/MainHeroSection";
import AboutMeSection from "./components/AboutMeSection";
import WhatIDoSection from "./components/WhatIDoSection";
import TrustRowSection from "./components/TrustRowSection";
import FinalCTA from "../services/components/Section7";
import GetInTouchSection from "./components/GetInTouchSection";
import TechStackSection from "./components/TechStackSection";
import { homeTexts } from "./home-texts";

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
        <MainHeroSection />
        <AboutMeSection text={homeTexts.aboutMeSection} />
        <Separator />
        <TechStackSection text={homeTexts.techStackSection} />
        <TrustRowSection text={homeTexts.trustRowSection} />
        <WhatIDoSection text={homeTexts.whatIDoSection} />
        <ImageGallery />
        <GetInTouchSection />
        <Separator />
        <TestimonialsSection animate={animate} localRef={localRef} />
        <FinalCTA text={homeTexts.finalCTA} />
      </StyledContent>
    </div>
  );
};

export default Home;
