import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button className="Button" href={props.href}>
      <a href={props.href}>{props.title}</a>
    </button>
  );
};

export default Button;
