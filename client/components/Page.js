import React from 'react';
import ModalForm from './ModalForm.js';
import LogIn from './LogIn.js';
import Home from './Home.js';
import About from './About.js';

const Page = ({ show, closeModal, pageChange, page }) => {
  if (page === 'signup') {
    return <ModalForm show={show} closeModal={closeModal} pageChange={pageChange} />
  } else if (page === 'login') {
    return <LogIn show={show} pageChange={pageChange} closeModal={closeModal}/>
  } else if (page === 'home') {
    return <Home />
  } else if (page === 'about') {
    return <About />
  }
};

export default Page;