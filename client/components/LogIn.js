import React, { useState } from 'react';
import '../styles/modal.css';
import axios from 'axios';


const LogIn = ({ show, pageChange, closeModal}) => {
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

        <input className='loginBtn' type='submit' value='Log In' onClick={closeModal}/><br/>
        <p className='newMemberLink' onClick={pageChange}>Not a member?</p>
      </form>
    </div>
  )
}

export default LogIn;