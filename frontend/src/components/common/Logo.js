import React from 'react';
import classes from './Logo.module.css';

const Logo = (props) => {
  return (
    <a href="/">
      <img className={classes.logo} src="/assets/svgs/Logo.svg" alt="Website Logo Says MySalad" />
    </a>
  );
};

export default Logo;
