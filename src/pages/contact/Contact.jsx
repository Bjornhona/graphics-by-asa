import StyledContent from '../../components/styledContent/StyledContent';
import './contact.scss';
import image from './designer-profile.jpg';
import logo from '../../logo2.svg';

const Contact = () => {
  return (
    <div id="contact">
      <StyledContent title='contact'>
        <p>Hi there,</p>
        <p>Sounds like a great idea, tell me about it!<br />
          Send me an email to <a href={"mailto:info@graphicsbyasa.com"}>info@graphicsbyasa.com</a> or fill out the form below.</p>
        <div className="contact-image-container">
          <img src={logo} alt="logo Graphics by Åsa" className="contact-logo" />
          <div className="contact-me-text">
            <p>I am a multidisciplinary web developer with a main focus on design. I have years of experience as a Frontend Developer mainly using React framework with Redux, but also good knowledge of HTML, CSS, SASS etc.</p>
            <p>Since I started my creer back in 1999 as a Product Designer Engineer I have had the opportunity to work for plenty of multinational companies both as a designer and a developer. During the last 7 years I have also been offering my services as a Freelancer to clients all over the world, collaborating with both startups and entrepreneurs.</p>
            <p>I will be happy to o discuss collaborative projects and freelance commissions.</p>
          </div>
          <img src={image} alt={"me"} className="contact-image" />
        </div>
        <h4>Fill out the form and I´ll get back to you</h4>
      </StyledContent>
    </div>
  )
}

export default Contact;