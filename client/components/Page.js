import React from 'react';
import ModalForm from './ModalForm.js';
import LogIn from './LogIn.js';
import Home from './Home.js';
import About from './About.js';
import Landing from './Landing.js';

const Page = ({ show, closeModal, pageChange, page, switchView}) => {
  if (page === 'signup') {
    return <ModalForm show={show} closeModal={closeModal} pageChange={pageChange} page={page} switchView={switchView}/>
  } else if (page === 'login') {
    return <LogIn show={show} pageChange={pageChange} closeModal={closeModal} switchView={switchView}/>
  } else if (page === 'home') {
    return <Home page={page} show={show} pageChange={pageChange} closeModal={closeModal}/>
  } else if (page === 'about') {
    return <About />
  } else {
    return <Landing show={show} page={page} pageChange={pageChange} closeModal={closeModal} />
  }
};

export default Page;