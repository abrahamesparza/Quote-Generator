import React from 'react';
import Page from './Page.js';
import '../styles/main.css';

const Main = ({ show, closeModal, pageChange, page, urlChange }) => {
  return (
    <main>
      <div className='modalPopup'>
        <Page show={show} closeModal={closeModal} pageChange={pageChange} page={page} /* urlChange={urlChange} */ />
      </div>
    </main>
  )
};

export default Main;