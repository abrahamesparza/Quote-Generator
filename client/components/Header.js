import React, { useState } from 'react';
import '../styles/header.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

const Header = ( { showModal, closeModal } ) => {
  let [page, setPage] = useState('');
  let setHome = () => {
    closeModal();
    setPage('home');
    alert('click')

  }
  return (
    <Router>
      <header>
        <Link className='link' to='/' >
          <div onClick={setHome}>Home</div>
        </Link>
        <Link className='link' to='/about'>
        {/* add a page state, on click change state to about */}
          <div onClick={() => closeModal()}>About</div>
        </Link>
        <Link className='link' to='/signup'>
          <div onClick={showModal}>Sign Up</div>
        </Link>
      </header>
    </Router>
  )
};

export default Header;