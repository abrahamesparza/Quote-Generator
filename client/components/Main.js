import React from 'react';
import Page from './Page.js';
import '../styles/main.css';

const Main = ({ show, closeModal, formChange, page, setProfile }) => {
  return (
    <main>
      <div className='modalPopup'>
        <Page show={show} closeModal={closeModal} formChange={formChange} page={page} setProfile={setProfile} />
      </div>
    </main>
  )
};

export default Main;