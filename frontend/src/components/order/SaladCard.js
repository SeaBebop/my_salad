import React from 'react';
import CardWrapper from '../common/CardWrapper';
import OrangeButton from '../common/OrangeButton';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { api } from '../../services/api';

import classes from './SaladCard.module.css';

const SaladCard = (props) => {
  const saladDetailsPath = `/showSalad/${encodeURIComponent(props.saladId)}`;

  const addToCart = async function () {
    try {
      const token = localStorage.getItem('token');

      if (!token) throw new Error('No Token found');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      let response;

      const checkCart = await api.get(`api/carts/find/${userId}`, token);

      if (checkCart === null) {
        response = await api.post(
          'api/carts',
          { userId: userId, salads: [{ saladId: props.saladId }], quantity: 1 },
          token,
          'application/json',
          {
            userId,
          }
        );
      } else {
        const hasSalad = checkCart.salads.some((salad) => salad.saladId === props.saladId);

        response = await api.put(
          `api/carts/${checkCart._id}`,
          { salads: [...checkCart.salads, { saladId: props.saladId }] },
          token
        );
      }

      // Handle success or update state as needed
    } catch (error) {
      console.error(error);
      // Handle error or update state as needed
    }
  };

  return (
    <CardWrapper classesPassed={classes.CardWrapper}>
      <div className={classes.imgCont}>
        <Link to={saladDetailsPath}>
          <img src={props.imgSrc} alt={props.saladName} />
        </Link>
      </div>
      <div className={classes.infoCont}>
        <h2>
          <Link to={saladDetailsPath}>{props.saladName}</Link>
        </h2>
        <p>
          <b>{props.category}</b>
        </p>
        <h3>{props.price}$</h3>
        <OrangeButton onClick={addToCart} className={classes.OrangeButton}>
          Add to Cart
        </OrangeButton>
      </div>
    </CardWrapper>
  );
};

export default SaladCard;
