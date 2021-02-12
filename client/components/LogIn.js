import React, { useState } from 'react';
import '../styles/modal.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

const LogIn = ({ show, formChange, closeModal}) => {
  if (!show) {
    return null;
  }

  let [login, setLogin] = useState({
    email: '',
    password: '',
  });

  let handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  }

  let onSubmit = (e) => {
    e.preventDefault();
    let data = login;
    axios.post('/login/user', data)
    .then(res => console.log('res:', res))
    .catch(err => alert('Password failed. Try again.'))
  }

  return (
    <Router>
      <div className='form-container'>
      <h1>Log In</h1>
        <form className='loginForm' onSubmit={onSubmit}>
          <label className='form-text'>
          Email:
          </label><br/>
          <input type='email' name='email' onChange={handleChange}/><br/><br/>

          <label className='form-text'>
          Password:
          </label><br/>
          <input type='password' name='password' onChange={handleChange}/><br/><br/>
          <Link to='/profile'>
            <input className='loginBtn' type='submit' value='Log In' onClick={setProfile}/><br/>
          </Link>
          <p className='newMemberLink' onClick={formChange}>Not a member?</p>
        </form>
      </div>
    </Router>
  )
}

export default LogIn;