import React from 'react';
import '../styles/header.css';

const Header = ( { showModal } ) => {
  return (
    <header>
      <div>Home</div>
      <div>About</div>
      <div onClick={showModal}>Join</div>
    </header>
  )
};

export default Header;