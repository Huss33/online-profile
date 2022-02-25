import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function ContactMe() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');
  const { name, email, message } = contactForm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      console.log('Submit Form', contactForm);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setError('Your email is invalid.');
      } else {
        setError('');
      }
    } else {
      if (!e.target.value.length) {
        setError(`${e.target.name} is required.`);
      } else {
        setError('');
      }
    }
    if (!error) {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value });
      console.log('Handle Form', contactForm);
    }
  };

  return (
    <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {error && (
          <div>
            <p className="error-text">{error}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactMe;