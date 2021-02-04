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
      <input type='text' name='lastName' />

      <label>
      Email:
      </label>
      <input type='email' name='email' />

      <label>
      Password:
      </label>
      <input type='password' name='password' />

      <label>
      Confirm Password:
      </label>
      <input type='password' name='confirmPassword' />

      <input type='submit' value='Sign Up' />
    </form>
  )
}