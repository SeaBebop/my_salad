import React from 'react';
import classes from './FormWrapper.module.css';

const FormWrapper = (props) => {
  return (
    <form encType={props.encType} className={classes.formWrapper} action={props.action} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default FormWrapper;
