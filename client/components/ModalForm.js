import React, { useState } from 'react';
import axios from 'axios';
import './modal.css'


const ModalForm = ({ show }) => {
  if (!show) {
    return null;
  }
  let [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: ''
  });

  let handleChange = (e) => {
    console.log('event name', e.target.name, 'event value', e.target.value);
    setUser({
      [e.target.name]: e.target.value
    });
  };

  /*
    currently, only the last prop and value are sending to my API
    need to resolve so that all form data is sent to API
  */
  let handleSubmit = (e) => {
    e.preventDefault()
    let data = user;
    setUser({[e.target.name]: e.target.value});
    axios.post('/new/user', data)
    .then(res => console.log(res))
    .catch(err => console.error(err))
  }

  return (
    <div className='form-container'>
      <form className='form-space' onSubmit={handleSubmit}>
        <label>
          First Name:<br/>
          <input type='text' name='firstName' onChange={handleChange}/>
        </label><br/>
        <label>
          Last Name:<br/>
          <input type='text' name='lastName' onChange={handleChange}/>
        </label><br/>
        <label>
          Email:<br/>
          <input type='email' name='email' onChange={handleChange}/>
        </label><br/>
        <label>
          Password:<br/>
          <input type='password' name='password' onChange={handleChange}/>
        </label><br/>
        <label>
          Age:<br/>
          <input type='text' name='age' onChange={handleChange}/>
        </label><br/>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
};

export default ModalForm;