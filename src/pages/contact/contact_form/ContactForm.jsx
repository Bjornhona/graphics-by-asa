import { useRef } from 'react';
import './contactForm.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = (props) => {
  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
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
      message: ''
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

      <button type="submit">Send</button>
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
