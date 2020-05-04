import React from 'react';
import logo from './../../assets/images/logo.png';
import './logo.css';

const Logo = (props) => {
  return (
    <div className="Home" id="home">
      <img className="Logo" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
