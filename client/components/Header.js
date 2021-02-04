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
        <Link className='link' to='/login'>
          <div onClick={showModal}>Log In</div>
        </Link>
      </header>
    </Router>
  )
};

export default Header;