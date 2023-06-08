import React from 'react';
import classes from './UserCont.module.css';
import OrangeLinkBtn from '../OrangeLinkBtn';
import UserLoggedIn from './UserLoggedIn';

const UserCont = (props) => {
  const token = localStorage.getItem('token');

  return (
    <div className={classes.UserCont}>
      {token ? (
        <UserLoggedIn user={props.user} isAdmin={props.isAdmin} />
      ) : (
        <OrangeLinkBtn btnHref="/login">Login / Register</OrangeLinkBtn>
      )}
    </div>
  );
};

export default UserCont;
