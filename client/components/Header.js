import React, { useState } from 'react';
import '../styles/header.css';
import About from './About.js';
import Home from './Home.js';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

const Header = ( { showModal, closeModal, switchView } ) => {
  return (
    <Router>
      <header>
        <Link className='link' to='/' >
          <div onClick={() => switchView('home')}>Home</div>
        </Link>
        <Link className='link' to='/about'>
        {/* add a page state, on click change state to about */}
          <div onClick={() => switchView('about')}>About</div>
        </Link>
        <Link className='link' to='/signup'>
          <div onClick={showModal}>Sign Up</div>
        </Link>
      </header>
    </Router>
  )
};

export default Header;