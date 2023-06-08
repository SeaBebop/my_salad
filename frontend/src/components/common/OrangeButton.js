import React from 'react';
import classes from './OrangeButton.module.css';

const OrangeButton = (props) => {
  return (
    <button
      className={`${classes.OrangeBtn} ${props.className}`}
      type={props.type}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default OrangeButton;
