import React from 'react';
import classes from './HomeHeader.module.css';

const HomeHeader = (props) => {
  return (
    <header className={classes.header}>
      <div className={`${classes.circleOne} ${classes.circle}`}>
        <h1>
          Made with <br /> Passion
        </h1>
      </div>
      <a className={classes.orderNow} href="/order">
        <img src="/assets/svgs/Order-Now.svg" alt="Order now" />
      </a>
      <div className={`${classes.circleTwo} ${classes.circle}`}>
        <h1>
          Fresh Every <br /> Day
        </h1>
      </div>
    </header>
  );
};

export default HomeHeader;
