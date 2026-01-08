import StyledContent from '../../components/styledContent/StyledContent';
import './contact.scss';
import image from './designer-profile.jpg';
import logo from '../../logo.png';
import ContactForm from './contact_form/ContactForm';
import Calendly from './calendly/Calendly';

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
            <p><strong>Let’s talk about your project</strong></p>
            <p>I help consultants and small businesses create modern, high-performing websites — without stress or technical headaches.</p>
            <p><strong>Typical projects:</strong></p>
            <ul>
              <li>Website redesigns</li>
              <li>Landing pages</li>
              <li>WordPress → Next.js migrations</li>
              <li>Quick frontend fixes</li>
            </ul>
            <p>Trusted by consultants and small businesses across Europe</p>
          </div>
          <img src={image} alt={"me"} className="contact-image" />
        </div>
        <h4>Fill out the form and I´ll get back to you</h4>
        <ContactForm />
        <Calendly />
      </StyledContent>
    </div>
  )
}

export default Contact;