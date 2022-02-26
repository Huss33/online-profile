import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [textInput, setTextInput] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setTextInput(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrMsg('Email or name is invalid');
      return;
    }
    alert(`Hello ${name}`);

    setName('');
    setEmail('');
    setTextInput('');
  };

  return (
    <div>
      <p>Hello {name}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={textInput}
          name="textInput"
          onChange={handleInputChange}
          type="textInput"
          placeholder="textInput"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errMsg && (
        <div>
          <p className="error-text">{errMsg}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;