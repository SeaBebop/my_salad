import React, { Fragment } from 'react';
import classes from './UserLoggedIn.module.css';
import OrangeLinkBtn from '../OrangeLinkBtn';

const UserLoggedIn = (props) => {
  return (
    <Fragment>
      {props.isAdmin ? <OrangeLinkBtn btnHref="/dashboard">Dashboard</OrangeLinkBtn> : ''}
      <OrangeLinkBtn>Welcome {props.user}</OrangeLinkBtn>
      <OrangeLinkBtn btnHref="/cart" className={classes.cartBtn}>
        🛒
      </OrangeLinkBtn>
    </Fragment>
  );
};

export default UserLoggedIn;
