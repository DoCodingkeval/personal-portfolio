import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import { index } from './Schema';
import emailjs from '@emailjs/browser';
import SuccessMsg from './SuccessMsg';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const ContactForm = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const { errors, values, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: index,
    onSubmit: (values, action) => {
      action.resetForm();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 5000);

      const userValues = {
        name: values.name,
        email: values.email,
        message: values.message,
      };

      const Service_Id = import.meta.env.VITE_SERVICE_ID;
      const Public_Key = import.meta.env.VITE_PUBLIC_KEY;
      const Template_Id = import.meta.env.VITE_TEMPLATE_ID;

      emailjs
        .send(Service_Id, Template_Id, userValues, Public_Key)
        .then(() => {
          console.log('success');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return success ? (
    <SuccessMsg setSuccess={setSuccess} />
  ) : loading ? (
    <Loader />
  ) : (
    <form
      className="m-5 w-full text-sm text-[var(--text-gray)] lg:h-max"
      ref={form}
      onSubmit={handleSubmit}
    >
      <div className="mb-4 grid gap-1">
        <label htmlFor="name">_name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="rounded-lg border border-[var(--border-primary)] bg-[#020618] p-2 text-white outline-transparent"
        />
        {errors.name && touched.name && (
          <span className="text-xs text-red-400">{errors.name}</span>
        )}
      </div>

      <div className="mb-4 grid gap-1">
        <label htmlFor="email">_email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="rounded-lg border border-[var(--border-primary)] bg-[#020618] p-2 text-white outline-transparent"
        />
        {errors.email && touched.email && (
          <span className="text-xs text-red-400">{errors.email}</span>
        )}
      </div>

      <div className="grid gap-1">
        <label htmlFor="name">_message:</label>
        <textarea
          name="message"
          placeholder="your message here..."
          rows={3}
          value={values.message}
          onChange={handleChange}
          className="resize-none rounded-lg border border-[var(--border-primary)] bg-[#020618] p-2 text-white outline-transparent placeholder:text-sm placeholder:text-[var(--text-gray)]"
        ></textarea>
        {errors.message && touched.message && (
          <span className="text-xs text-red-400">{errors.message}</span>
        )}
      </div>

      <input
        type="submit"
        value="submit-message"
        className="mt-3.5 cursor-pointer rounded-lg border bg-[var(--border-primary)] p-3 text-sm transition-all duration-300 hover:translate-y-1 hover:scale-[1.05] hover:bg-[#00f0ff] hover:text-[#0b1622] hover:shadow-[0_0_15px_#00f0ff]"
      />
    </form>
  );
};

export default ContactForm;
