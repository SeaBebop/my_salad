import React from 'react';
import classes from './InputField.module.css';

const InputField = (props) => {
  return (
    <input
      className={classes.inputField}
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      min={props.min}
      accept={props.accept}
    />
  );
};

export default InputField;
