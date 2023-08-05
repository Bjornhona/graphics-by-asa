import './home.scss';
import StyledContent from '../../components/styledContent/StyledContent';
import FlowersImage from "./FlowerPortfolio1.jpg";

const Home = () => {
  return (
    <>
      <div className="body-image-over">
        <img src={FlowersImage} alt="flowers" />
        <div className="body-image-text">
          <div className="inner-text">
            <h2>Graphics for your business</h2>
            <p>www.graphicsbyasa.com</p>
          </div>
        </div>
      </div>
      <div id="home">
        <StyledContent title='home'>
          <div className="home-inner-content">
            <h2>Be outstanding</h2>
            <div>
              <p>What strategy does your business use in order to stand out in a tough market? There are plenty of interesting and well represented companies out there. One of the most proven solutions is to make sure that you are present with your own attractive and professional graphic material and that make you stand out from the crowd.</p>
              <p>I have worked in particular with creating websites and branding for mainly real estate and financial companies who quickly need to create an interesting image and mark their breakthrough on the market and in front of investors. I have discovered a high demand for fast and simple products at affordable prices to meet the thirsty needs of my customers. Therefore, get in touch with me for more information about how I can help you achieve your goals. And do visit my portfolio to have a look at my recent work.</p>
            </div>
          </div>
        </StyledContent>
      </div>
    </>
  )
}

export default Home;