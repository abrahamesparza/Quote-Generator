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
        <Link to='/'>
          <div>Home</div>
        </Link>
        <Link to='/about'>
          <div>About</div>
        </Link>
        <Link to='/join'>
          <div onClick={showModal}>Join</div>
        </Link>
      </header>
    </Router>
  )
};

export default Header;