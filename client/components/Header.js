import React from 'react';
import '../styles/header.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

const Header = ( { showModal } ) => {
  return (
    <Router>
      <header>
        <Link className='link' to='/'>
          <div>Home</div>
        </Link>
        <Link className='link' to='/about'>
          <div>About</div>
        </Link>
        <Link className='link' to='/signup'>
          <div onClick={showModal}>Sign Up</div>
        </Link>
      </header>
    </Router>
  )
};

export default Header;