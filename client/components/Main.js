import React from 'react';
import Page from './Page.js';
import '../styles/main.css';

const Main = ({ show, closeModal, pageChange, page }) => {
  return (
    <main>
      <div className='modalPopup'>
        <Page show={show} closeModal={closeModal} pageChange={pageChange} page={page} />
      </div>
    </main>
  )
};

export default Main;