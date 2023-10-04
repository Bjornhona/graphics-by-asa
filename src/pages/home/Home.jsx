import './home.scss';
import { useState, useLayoutEffect, useRef, useCallback } from 'react';
import StyledContent from '../../components/styledContent/StyledContent';
import FlowersImage from "./FlowerPortfolio1.jpg";
import ConversionRateImage from "./Conversion-rates2.png";
import MoreSalesImage from "./More-sales2.png";
import MoreExposureImage from "./More-exposure2.png";
import Separator from '../../components/separator/Separator';
import Testimonials from './testimonials/Testimonials';
import ImageGallery from './imageGallery/ImageGallery';

const Home = () => {
  const localRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const onScroll = useCallback(() => {
    const topPos = localRef.current.getBoundingClientRect().top + window.pageYOffset;
    const scrollPos = window.scrollY + window.innerHeight;

    if (topPos < scrollPos) {
      setAnimate(true);
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <>
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

      <div id="home">
        <StyledContent title='home'>
          <div className="home-inner-content">
            <div className="home-inner-container">
              <h1>Be outstanding</h1>
              <div>
                <p>What strategy does your business use in order to stand out in a tough market? There are plenty of interesting and well represented companies out there. One of the most proven solutions is to make sure that you are present with your own attractive and professional graphic material and that make you stand out from the crowd.</p>
                <p>I have worked in particular with creating websites and branding for mainly real estate and financial companies who quickly need to create an interesting image and mark their breakthrough on the market and in front of investors. I have discovered a high demand for fast and simple products at affordable prices to meet the thirsty needs of my customers. Therefore, get in touch with me for more information about how I can help you achieve your goals. And do visit my portfolio to have a look at my recent work.</p>
              </div>
            </div>
          </div>

          <div className="home-kpi-container">
            <div className="home-kpi">
              <div className="home-kpi-image">
                <img src={ConversionRateImage} alt="Conversion rate icon" />
              </div>
              <h2>Increase conversion rate</h2>
              <p>People are more likely to buy a product if they get a good visual explanation of how it works. A well designed website can acquire you new customers, gather leads, downloads, etc.</p>
            </div>
            <div className="home-kpi">
              <div className="home-kpi-image">
                <img src={MoreSalesImage} alt="More sales icon" />
              </div>
              <h2>More sales and R.O.I.</h2>
              <p>Effective design goes beyond aesthetics and is not simply about making things look visually appealing. A tea company redesigned their packaging and increased their sales with 64 percent the following year.</p>
            </div>
            <div className="home-kpi">
              <div className="home-kpi-image">
                <img src={MoreExposureImage} alt="More exposure icon" />
              </div>
              <h2>More exposure</h2>
              <p>Whether it’s e-newsletters and websites, blogs and social media, or printed materials, high-quality visuals grab attention at a much higher rate than applications using low-quality, stock or nonexistent imaging.</p>
            </div>
          </div>

          <ImageGallery />

          <div className="home-inner-container__centered">
            <div className="home-inner-text">
              <h5>Get in touch</h5>
              <p>Make your business stand out with professional and attractive graphic design!</p>
            </div>
            <button>Contact me</button>
          </div>

          <Separator />

          <Testimonials animate={animate} localRef={localRef} />

        </StyledContent>
      </div>
    </>
  )
}

export default Home;