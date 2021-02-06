import React, { useState } from 'react';
import axios from 'axios';
import '../styles/modal.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';


const ModalForm = ({ show, closeModal, pageChange }) => {
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
  console.log('Sign up page')
  return (
    <Router>
      <div className='form-container'>
      <h3>Sign Up</h3>
        <form className='form-space' onSubmit={onSubmit}>
          <label className='form-text'>
            First Name:
          </label><br/>
          <input  type='text' name='firstName' onChange={handleChange}/><br/><br/>

          <label className='form-text'>
            Last Name:
          </label><br/>
          <input  type='text' name='lastName' onChange={handleChange}/><br/><br/>

          <label className='form-text'>
            Email:
          </label><br/>
          <input  type='email' name='email' onChange={handleChange}/><br/><br/>

          <label className='form-text'>
            Password:
          </label><br/>
          <input  type='password' name='password' onChange={handleChange}/><br/><br/>

          <label className='form-text'>
            Age:
          </label><br/>
          <input  type='text' name='age' onChange={handleChange}/><br/><br/>

          <input type='submit' className='submitBtn' value='Sign Up' onClick={closeModal}/>

          <Link className='link' to='/login'>
          <p className='loginBtn' onClick={pageChange}>Already a member?</p>
          </Link>

        </form>
      </div>
    </Router>
  )
};

export default ModalForm;