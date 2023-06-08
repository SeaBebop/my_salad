import React from 'react';
import classes from './OrangeLinkBtn.module.css';

const OrangeLinkBtn = (props) => {
  return (
    <a className={`${classes.OrangeBtn} ${props.className}`} href={props.btnHref} style={props.style}>
      {props.children}
    </a>
  );
};

export default OrangeLinkBtn;
