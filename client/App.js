import React, { useState, useEffect } from 'react';
import './styles/app.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

const App = () => {
  let [show, setShow] = useState(false);
  let [page, setPage] = useState('signup');

  let showModal = () => {
    setPage('signup');
    if (show === false) {
      setShow(true)
    } else {
      setShow(false);
    }
  };

  let closeModal = () => {
    setTimeout(() => {
      if (show === true) {
        setShow(false)
      }
    }, 100)
    setPage('home')
  };

  let pageChange = (e) => {
    e.preventDefault();
    if (page === 'signup') {
      setPage('login');
    } else if (page === 'login'){
      setPage('signup');
    }
  };

  // let redirectHome = () => {
  //   setPage('home');
  //   return window.location.assign('/');
  // }

  // let urlChange = () => {
  //   redirectHome();
  // };

  console.log('page', page);

  return (
    <div className='container'>
      <Header showModal={showModal} closeModal={closeModal}/>
      <Aside />
      <Main show={show} closeModal={closeModal} pageChange={pageChange} page={page} /*urlChange={urlChange} */ />
      <Footer />
    </div>
  )
}

export default App;