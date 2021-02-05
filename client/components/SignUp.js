import React from 'react';

const LogIn = () => {
  return (
    <form className='loginForm'>
      <label>
      Email:
      </label>
      <input type='email' name='email' />

      <label>
      Password:
      </label>
      <input type='password' name='password' />

      <input type='submit' value='Log In' />
    </form>
  )
}

export default LogIn;