import React from 'react';
import ModalForm from './ModalForm.js';
import LogIn from './LogIn.js';
import Home from './Home.js'
import Profile from './Profile.js';

const Page = ({ show, closeModal, formChange, page, setProfile }) => {
  if (page === 'signup') {
    return <ModalForm show={show} closeModal={closeModal} formChange={formChange} setProfile={setProfile} />
  } else if (page === 'login') {
    return <LogIn show={show} formChange={formChange} closeModal={closeModal} setProfile={setProfile}/>
  } else if (page === 'home') {
    return <Home />
  } else if (page === 'profile') {
    return <Profile />
  }
};

export default Page;