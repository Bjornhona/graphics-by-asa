import { useRef } from 'react';
import './contactForm.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import reCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
      }, (error) => {
          console.log('FAILED...', error);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .max(200, 'Must be 200 characters or less')
    }),
    onSubmit: (values, { resetForm }) => {
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
          id="username"
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

      <div className='form-box'>
        {/* <div className="g-recaptcha" sitekey={process.env.REACT_APP_SITE_KEY}></div> */}
        {/* <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_SITE_KEY}></div> */}
        {/* <ReCaptcha sitekey={process.env.REACT_APP_SITE_KEY} /> */}
      </div>

      <button
        type="submit"
        // className="g-recaptcha"
        // data-sitekey="6LenNGUoAAAAAC8plPARE4R_XS8Z4Nph7kq4gGO9"
        // data-callback='onSubmit' 
        // data-action='submit'
      >Send</button>
    </form>
  );
}

export default ContactForm;
