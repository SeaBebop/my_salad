import React, { useEffect, useState } from 'react';
import classes from './LoginPage.module.css';
import CardWrapper from '../../components/common/CardWrapper';
import Logo from '../../components/common/Logo';
import LoginForm from '../../components/login/LoginForm';
import RegisterForm from '../../components/login/RegisterForm';

const LoginPage = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const { setCurrentPage } = props;

  useEffect(() => {
    setCurrentPage('login');
    document.title = 'Login Page';
    return () => setCurrentPage('');
  }, [setCurrentPage]);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  return (
    <div className={classes.LoginPage}>
      <CardWrapper classesPassed={classes.cardWrapper}>
        <Logo />
        <div className={classes.LogRegTrigger}>
          <button className={isLogin ? classes.activeButton : ''} onClick={handleLoginClick}>
            Login
          </button>
          <button className={!isLogin ? classes.activeButton : ''} onClick={handleRegisterClick}>
            Register
          </button>
        </div>
        <div style={{ width: '30rem' }}>{isLogin ? <LoginForm /> : <RegisterForm />}</div>
      </CardWrapper>
    </div>
  );
};

export default LoginPage;
