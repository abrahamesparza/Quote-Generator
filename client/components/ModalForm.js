import React, { useState } from 'react';
import axios from 'axios';
import '../styles/modal.css'


const ModalForm = ({ show, closeModal }) => {
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
      ...user,
      [e.target.name]: e.target.value
    });
  };

  let onSubmit = (e) => {
    e.preventDefault()
    let data = user;
    setUser({[e.target.name]: e.target.value});
    axios.post('/new/user', data)
    .then(res => console.log(res))
    .catch(err => console.error(err))
  }
  console.log('user:', user);
  return (
    <div className='form-container'>
      <form className='form-space' onSubmit={onSubmit}>
        <label>
          First Name:<br/>
          <input  type='text' name='firstName' onChange={handleChange}/>
        </label><br/>
        <label>
          Last Name:<br/>
          <input  type='text' name='lastName' onChange={handleChange}/>
        </label><br/>
        <label>
          Email:<br/>
          <input  type='email' name='email' onChange={handleChange}/>
        </label><br/>
        <label>
          Password:<br/>
          <input  type='password' name='password' onChange={handleChange}/>
        </label><br/>
        <label>
          Age:<br/>
          <input  type='text' name='age' onChange={handleChange}/>
        </label><br/>
        <input className='submitBtn' type='submit' value='Submit' onClick={closeModal}/>
      </form>
    </div>
  )
};

export default ModalForm;