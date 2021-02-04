import React from 'react';

const SignUp = () => {
  return (
    <form className='signupForm'>
      <label>
        First Name:
      </label>
      <input type='text' name='firstName' />

      <label>
      Last Name:
      </label>
      <input type='text' name='firstName' />

      <label>
      Email:
      </label>
      <input type='email' name='firstName' />

      <label>
      Password:
      </label>
      <input type='password' name='firstName' />

      <label>
      Confirm Password:
      </label>
      <input type='password' name='firstName' />
    </form>
  )
}