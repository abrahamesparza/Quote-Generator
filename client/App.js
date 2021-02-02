import React, { useState, useEffect } from 'react';
import './styles/app.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

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
      <Header showModal={showModal}/>
      <Aside />
      <Main show={show} closeModal={closeModal}/>
      <Footer />
    </div>
  )
}

export default App;