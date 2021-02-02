import React from 'react';
import ModalForm from './ModalForm.js';
import '../styles/main.css';

const Main = ({ show, closeModal }) => {
  return (
    <main>
      <div className='modalPopup'>
        <ModalForm show={show} closeModal={closeModal}/>
      </div>
    </main>
  )
};

export default Main;