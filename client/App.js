import React, { useState } from 'react';
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
      <ModalForm show={show}/>
      </div>
    </main>
    <footer>Footer</footer>
    </div>
  )
}

export default App;