import React, { useState, useEffect } from 'react';
import './styles/app.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

import axios from 'axios';

const App = () => {
  let [show, setShow] = useState(false);
  let [page, setPage] = useState('landing');

  useEffect(() => {
    getSession();
  }, []);

  let getSession = () => {
    axios.get('/session')
    .then(res => console.log(res))
    .catch(err => console.error(err))
  }

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
      <Main show={show} closeModal={closeModal} pageChange={pageChange} page={page} switchView={switchView}/>
      <Footer />
    </div>
  )
}

export default App;