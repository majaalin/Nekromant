import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <a className="Button" href={props.href}>
      {props.title}
    </a>
  );
};

export default Button;
