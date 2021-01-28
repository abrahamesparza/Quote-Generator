import React, { useState, useEffect } from 'react';
import './app.css';
import ModalForm from './components/ModalForm.js';

const App = () => {
  let [show, setShow] = useState(false)
  console.log('show',show)

  let showModal = () => {
    if (show === false) {
      setShow(true)
    } else {
      setShow(false);
    }
  }

  let closeModal = () => {
    setTimeout(() => {
      if (show === true) {
        setShow(false)
      }
    }, 100)
  }

  return (
    <div className='container'>
    <header>
      <div>Home</div>
      <div>About</div>
      <div onClick={showModal}>Join</div>
    </header>
    <aside>Aside</aside>
    <main>
      <div className='modalPopup'>
      <ModalForm show={show} closeModal={closeModal}/>
      </div>
    </main>
    <footer>Footer</footer>
    </div>
  )
}

export default App;