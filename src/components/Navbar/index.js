import React from 'react';
import './navbar.css';

const Navbar = (props) => {
  return (
    <ul className="Navbar">
      <li>
        <a className="Link" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="Link" href="#events">
          Shows
        </a>
      </li>
      <li>
        <a className="Link" href="#playlist">
          Music
        </a>
      </li>
      <li>
        <a className="Link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
