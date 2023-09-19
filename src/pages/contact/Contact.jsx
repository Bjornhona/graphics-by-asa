import StyledContent from '../../components/styledContent/StyledContent';
import './contact.scss';
import image from './designer-profile.jpg';

const Contact = () => {
  return (
    <div id="contact">
      <StyledContent title='contact'>
        <p>Hi there,</p>
        <p>Sounds like a great idea, tell me about it!<br />
          Send me an email to <a href={"mailto:info@graphicsbyasa.com"}>info@graphicsbyasa.com</a> or fill out the form below.</p>
        <img src={image} alt={"me"} />
        <h4>Fill out the form and I´ll get back to you</h4>
      </StyledContent>
    </div>
  )
}

export default Contact;