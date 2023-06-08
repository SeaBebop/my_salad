import React from 'react';
import classes from './SaladItem.module.css';

const SaladItem = (props) => {
  return (
    <div className={classes.salad}>
      <div className={classes.saladImg}>
        <img src={props.imgSrc} alt={props.saladName} />
      </div>
      <div className={classes.info}>
        <h2>{props.saladName}</h2>
        <p>
          <b>{props.category}</b>
        </p>
        <p>{props.description}</p>
        <h3>{props.price}$</h3>
      </div>
    </div>
  );
};

export default SaladItem;
