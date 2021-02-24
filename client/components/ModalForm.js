import React, { useState } from 'react';
import axios from 'axios';
import '../styles/modal.css'
import Landing from './Landing.js';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';


const ModalForm = ({ show, closeModal, pageChange, page, switchView }) => {
  if (!show) {
    return null;
  }
  let [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    axios.post('/new/user', data, { withCredentials: true })
    .then(res => {
      res = res.data;
      console.log('res', res)
      if (res === 'user exists') {
        alert('Account exists with provided email. Log in, or use another email.');
        show = true;
      } else {
        show = false;
        alert('Welcome :)')
      }
    })
    .catch(err => console.error('error', err))
  }

  let timer = () => {
    setTimeout(() => {
      if (show === true) {
        closeModal();
        switchView('landing')
      } else {
        closeModal();
        switchView('home');
      }
    }, 500)
  }

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

          <input type='submit' className='submitBtn' value='Sign Up' onClick={timer} />

          {/* want to redirect url to /login upon click of form change, but not working atm */}
          {/* <Link className='link' to='/login'> */}
          <p className='loginText' onClick={pageChange}>Already a member?</p>
          {/* </Link>  */}

        </form>
      </div>
    </Router>
  )
};

export default ModalForm;