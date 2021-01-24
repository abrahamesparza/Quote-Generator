import React from 'react';
import './modal.css'

const ModalForm = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className='form-container'>
      <form className='form-space'>
        <label>
          First Name:<br/>
          <input type='text' name='firstName'/>
        </label><br/>
        <label>
          Last Name:<br/>
          <input type='text' name='lastName'/>
        </label><br/>
        <label>
          Email:<br/>
          <input type='text' name='email'/>
        </label><br/>
        <label>
          Password:<br/>
          <input type='text' name='password'/>
        </label><br/>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
};

export default ModalForm;