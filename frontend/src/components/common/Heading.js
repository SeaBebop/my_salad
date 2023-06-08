import React from 'react';

import classes from './Heading.module.css';

const Heading = (props) => {
  return (
    <div className={classes.headingCont}>
      <section></section>
      {props.children}
      <section></section>
    </div>
  );
};

export default Heading;
