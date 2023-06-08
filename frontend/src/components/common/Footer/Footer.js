import React from 'react';

import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={`${classes.footer} row`}>
      <p>Copyright © 2023 Faisal AlDrees, Sultan AlMansour, Abdulrahman AlGhofaily. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
