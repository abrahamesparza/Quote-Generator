import React, { useState, useEffect } from 'react';
import './styles/app.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';
import LogIn from './components/LogIn';

import axios from 'axios';

const App = () => {
  let [show, setShow] = useState(false);
  let [page, setPage] = useState('landing');

  useEffect(() => {
    assignPage();
  }, []);

  let assignPage = () => {
    axios.get('/home')
    .then(res => {
      let msg = res.data;
      if (msg === 'Unauthorized: No token provided') {
        setPage('landing')
      } else {
        setPage('home');
      }
    })
    .catch(err => console.error(err));
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

  let showLogin = () => {
    if (show === false) {
      setShow(true);
      switchView('login');
    } else {
      setShow(false);
      switchView('home');
    }
  }

  let authHome = () => {
    if (page === 'home') {
      axios.get('/home')
      .then(res => {
        if (res.data === 'Unauthorized: No token provided') {
          alert('Unauthorized: No token provided');
          setPage('landing');
        }
      })
      .catch(err => console.error(err));
    } else {
      setPage('home')
    }
  }

  let clearToken = () => {
    // let cookie = document.cookie.split('=')[1];
    let cookie = document.cookie;
    document.cookie = cookie+';max-age=0';
    cookie = document.cookie;
    console.log('cookie has been deleted');
    // delete cookie.token;
    // console.log('cookie after delete', cookie);
    authHome();
  }

  return (
    <div className='container'>
      <Header showModal={showModal} closeModal={closeModal} page={page} switchView={switchView} showLogin={showLogin} authHome={authHome} clearToken={clearToken}/>
      <Aside />
      <Main show={show} closeModal={closeModal} pageChange={pageChange} page={page} switchView={switchView} authHome={authHome}/>
      <Footer />
    </div>
  )
}

export default App;