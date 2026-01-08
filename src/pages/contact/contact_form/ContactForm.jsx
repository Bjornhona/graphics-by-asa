import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './contactForm.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = (props) => {
  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then(() => {
        toast.success('Your message was sent correctly! I will get back to you soon.', {
          position: toast.POSITION.TOP_RIGHT
        });
      }, () => {
        toast.error('Failed to send your message! Please try again later.', {
          position: toast.POSITION.TOP_RIGHT
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      message: '',
      privacyAccepted: false
    },
    validationSchema: yup.object({
      name: yup.string()
        .max(60, 'Must be 60 characters or less')
        .required('Required'),
      email: yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: yup.string()
        .max(800, 'Must be 800 characters or less'),
      privacyAccepted: yup.boolean()
        .oneOf([true], 'You must accept the Privacy Policy to continue')
        .required('You must accept the Privacy Policy to continue'),
    }),
    onSubmit: (values, { resetForm }) => {
      // https://www.makeuseof.com/react-google-recaptcha-integrate/
      if (values.username.length < 1) {
        sendEmail();
      }
      resetForm();
    }
  });

  return (
    <form id="contact-form" ref={form} onSubmit={formik.handleSubmit}>
      <div className='form-box'>
        <label htmlFor="name"><p>Your Name (required)</p></label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className='error-message'>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className='form-box'>
        <input
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          placeholder="Your Username (required)"
          tabIndex="-1"
          autoComplete="new-password"
        />
        {formik.touched.username && formik.errors.username ? (
          <div className='error-message'>{formik.errors.username}</div>
        ) : null}
      </div>

      <div className='form-box'>
        <label htmlFor="email"><p>Your Email (required)</p></label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error-message'>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className='form-box'>
        <label htmlFor="message"><p>Your Message</p></label>
        <textarea
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className='error-message'>{formik.errors.message}</div>
        ) : null}
      </div>

      <div className='form-box privacy-checkbox'>
        <label htmlFor="privacyAccepted" className="checkbox-label">
          <input
            id="privacyAccepted"
            name="privacyAccepted"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.privacyAccepted}
          />
          <span>I've read and accept the <Link to="/privacy-policy" target="_blank">Privacy Policy</Link>.</span>
        </label>
        {formik.touched.privacyAccepted && formik.errors.privacyAccepted ? (
          <div className='error-message'>{formik.errors.privacyAccepted}</div>
        ) : null}
      </div>

      <button 
        type="submit" 
        disabled={!formik.isValid || !formik.values.privacyAccepted}
      >
        Send
      </button>
      <p>I usually respond within 24 hours. Your information is kept private and never shared.</p>
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
