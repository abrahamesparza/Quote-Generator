import React, { useState } from 'react';
import '../styles/modal.css';
import axios from 'axios';


const LogIn = ({ show, pageChange, closeModal, switchView}) => {
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
    .then(res => {
      let msg = res.data;
      if (msg === 'account does not exist with provided email') {
        alert('account does not exist with provided email')
        show = true;
      } else {
        alert('Welcome back :)');
        show = false;
      }
    })
    .catch(err => {
      alert('Password failed. Try again.')
    })
  }

  let timer = () => {
    setTimeout(() => {
      if (show === true) {
        return null;
      } else {
        closeModal();
        switchView('home');
      }
    }, 500)
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

        <input className='loginBtn' type='submit' value='Log In' onClick={timer}/><br/>
        <p className='newMemberLink' onClick={pageChange}>Not a member?</p>
      </form>
    </div>
  )
}

export default LogIn;