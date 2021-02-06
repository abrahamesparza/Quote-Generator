import React from 'react';
import '../styles/modal.css'

const LogIn = ({ show, pageChange, closeModal}) => {
  if (!show) {
    return null;
  }
  console.log('Log In Page')
  return (
    <div className='form-container'>
    <h1>Log In</h1>
      <form className='loginForm'>
        <label className='form-text'>
        Email:
        </label><br/>
        <input type='email' name='email' /><br/>

        <label className='form-text'>
        Password:
        </label><br/>
        <input type='password' name='password' /><br/>

        <input className='loginBtn' type='submit' value='Log In' onClick={closeModal}/><br/>
        <p className='signUp-text'>Not a member?<br/>
            <input type='submit' className='signUpBtn' value='Sign Up' onClick={pageChange}/>
          </p>
      </form>
    </div>
  )
}

export default LogIn;