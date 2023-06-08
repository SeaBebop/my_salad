import React, { useState } from 'react';
import InputField from '../common/InputField';
import FormWrapper from '../common/FormWrapper';
import OrangeButton from '../common/OrangeButton';
import { api } from '../../services/api';

const RegisterForm = (props) => {
  const [UName, setUName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleNameChange = (event) => {
    setUName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegisterClick = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setPasswordMatchError(false);

      try {
        // Make the API request for registration
        const response = await api.post('api/users/register', {
          name: UName,
          email: email,
          password: password,
        });

        if (response.error) {
          throw new Error(response.error);
        }
        setErrorMsg('');
        window.location.href = '/login';
      } catch (error) {
        if (('' + error).startsWith('Error: E11000')) {
          setErrorMsg('Email already exist!');
        } else {
          setErrorMsg('Something went wrong, make sure to fill all fields');
        }
      }
    } else {
      setPasswordMatchError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label htmlFor="name">Your name</label>
      <InputField id="name" onChange={handleNameChange} required />
      <label htmlFor="email">Your email</label>
      <InputField id="email" type="email" onChange={handleEmailChange} required />
      <label htmlFor="password">Enter a password</label>
      <InputField id="password" type="password" value={password} onChange={handlePasswordChange} required />
      <label htmlFor="confirmPassword">Re-enter the password</label>
      <InputField
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        required
      />
      {passwordMatchError && <p style={{ color: 'red' }}>Passwords do not match</p>}
      {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : ''}
      <OrangeButton style={{ marginTop: '2rem' }} onClick={handleRegisterClick}>
        Register
      </OrangeButton>
    </FormWrapper>
  );
};

export default RegisterForm;
