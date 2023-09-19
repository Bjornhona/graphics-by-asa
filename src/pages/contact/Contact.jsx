import StyledContent from '../../components/styledContent/StyledContent';
import './contact.scss';

const Contact = () => {
  return (
    <div id="contact">
    <StyledContent title='contact'>
      <p>Hi there,</p>
      <p>Sounds like a great idea, tell me about it!</p>
      <p>Send me an email to <a href={"mailto:info@graphicsbyasa.com"}>info@graphicsbyasa.com</a> or fill out the form below.</p>
    </StyledContent>
  </div>
  )
}

export default Contact;