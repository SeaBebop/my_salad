import React, { useState } from 'react';
import InputField from '../common/InputField';
import FormWrapper from '../common/FormWrapper';
import OrangeButton from '../common/OrangeButton';
import { api } from '../../services/api';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFail, setLoginFail] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('api/users/login', {
        email: email,
        password: password,
      });

      if (response.token) {
        localStorage.setItem('token', response.token);
        window.location.href = '/';
      } else {
        throw new Error('Please check your email and password');
      }
    } catch (error) {
      setLoginFail(true);
      console.error('Please check your email and password');
    }
  };

  return (
    <FormWrapper>
      <label htmlFor="email">Your email</label>
      <InputField onChange={handleEmailChange} id="email" type="email" require />
      <label htmlFor="password">Your Password</label>
      <InputField onChange={handlePasswordChange} id="password" type="password" require />
      {loginFail && <p style={{ color: 'red' }}>Please check your email and password</p>}
      <OrangeButton style={{ marginTop: '2rem' }} onClick={handleLoginClick}>
        Login
      </OrangeButton>
    </FormWrapper>
  );
};

export default LoginForm;
