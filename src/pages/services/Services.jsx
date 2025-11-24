import "./services.scss";
import StyledContent from "../../components/styledContent/StyledContent";
import HeroSection from "./components/HeroSection";
import AboutMyServices from "./components/Section1";
import ServicePackages from "./components/Section2";
import PortfolioHighlights from "./components/Section3";
import WhyWorkWithMe from "./components/Section4";
import HowItWorks from "./components/Section5";
import { texts } from "./services-texts";
import Separator from "../../components/separator/Separator";
import FAQ from "./components/Section6";
import FinalCTA from "./components/Section7";

const Services = () => {
  return (
    <div id="services">
      <StyledContent title="services">
        <HeroSection
          title={texts.heroSection.title}
          subtitle={texts.heroSection.subtitle}
          buttonText={texts.heroSection.buttonText}
          buttonLink={texts.heroSection.buttonLink}
        />
        <AboutMyServices text={texts.section1} />
        <Separator />
        <ServicePackages text={texts.section2} />
        <Separator />
        <PortfolioHighlights text={texts.section3} />
        <WhyWorkWithMe text={texts.section4} />
        <HowItWorks text={texts.section5} />
        <Separator />
        <FAQ text={texts.section6} />
        <FinalCTA text={texts.section7} />
      </StyledContent>
    </div>
  );
};

export default Services;
