import React from 'react';
import classes from './Navigation.module.css';
import Logo from '../Logo';
import UserCont from './UserCont';

const Navigation = (props) => {
  return (
    <nav className={`${classes.navigation} row`}>
      <Logo />
      <UserCont user={props.user} isAdmin={props.isAdmin} />
    </nav>
  );
};

export default Navigation;
