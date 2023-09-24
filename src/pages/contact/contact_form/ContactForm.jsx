import './contactForm.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
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
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form id="contact-form" onSubmit={formik.handleSubmit}>
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
    </form>
  );
}

export default ContactForm;
