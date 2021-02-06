import React from 'react';
import ModalForm from './ModalForm.js';
import LogIn from './LogIn.js';

const Page = ({ show, closeModal, pageChange, page }) => {
  if (page === 'signup') {
    return <ModalForm show={show} closeModal={closeModal} pageChange={pageChange}/>
  } else if (page === 'login') {
    return <LogIn show={show} pageChange={pageChange} closeModal={closeModal}/>
  }
};

export default Page;