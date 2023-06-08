import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import SaladList from './SaladList';

import classes from './AdminPage.module.css';

const AdminPage = (props) => {
  const [isUsersList, setIsUsersList] = useState(false);

  useEffect(() => {
    document.title = 'Admin Page';
  }, []);

  if (!props.isAdmin) {
    window.location.href = '/';
  }

  const handleUsersClick = () => {
    setIsUsersList(false);
  };

  const handleSaladsClick = () => {
    setIsUsersList(true);
  };

  return (
    <div className={`${classes.AdminPage} row row-tb-margin`}>
      <div className={classes.UserSaladTrigger}>
        <button className={!isUsersList ? classes.activeButton : ''} onClick={handleUsersClick}>
          Salads
        </button>
      </div>
      {isUsersList ? <UserList /> : <SaladList />}
    </div>
  );
};

export default AdminPage;
