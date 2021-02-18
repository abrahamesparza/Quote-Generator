import React, { useState, useEffect } from 'react';
import './styles/app.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

const App = () => {
  let [show, setShow] = useState(false);
  let [page, setPage] = useState('home');

  let showModal = () => {
    if (show === false) {
      setShow(true)
      setPage('signup');
    } else {
      setShow(false);
      setPage('home');
    }
  };

  let closeModal = () => {
    setTimeout(() => {
      if (show === true) {
        setShow(false)
      }
    }, 100)
  };

  let pageChange = (e) => {
    e.preventDefault();
    if (page === 'signup') {
      setPage('login');
    } else if (page === 'login'){
      setPage('signup');
    }
  };

  let switchView = (target) => {
    setPage(target);
  };

  return (
    <div className='container'>
      <Header showModal={showModal} closeModal={closeModal} page={page} switchView={switchView} />
      <Aside />
      <Main show={show} closeModal={closeModal} pageChange={pageChange} page={page} />
      <Footer />
    </div>
  )
}

export default App;