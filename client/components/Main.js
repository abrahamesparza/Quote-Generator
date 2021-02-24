import React from 'react';
import Page from './Page.js';
import '../styles/main.css';

const Main = ({ show, closeModal, pageChange, page, switchView }) => {
  return (
    <main>
      <div className='modalPopup'>
        <Page show={show} closeModal={closeModal} pageChange={pageChange} page={page} switchView={switchView} />
      </div>
    </main>
  )
};

export default Main;
