import React, { useState, useEffect } from 'react';
import InputField from '../../components/common/InputField';
import FormWrapper from '../../components/common/FormWrapper';
import SaladItem from '../Admin/SaladItem';
import OrangeButton from '../../components/common/OrangeButton';

import jwtDecode from 'jwt-decode';
import { api, API_BASE_URL } from '../../services/api';

import classes from './CartPage.module.css';

const CartPage = (props) => {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;
  const [salads, setSalads] = useState([]);
  const [extractedSalads, setExtractedSalads] = useState([]);

  useEffect(() => {
    const fetchSalads = async () => {
      try {
        const checkCart = await api.get(`api/carts/find/${userId}`, token);

        setSalads(checkCart.salads);

        const tempSalads = [];

        for (let i = 0; i < salads.length; i++) {
          const saladInfo = salads[i];
          const response = await api.get(`api/salads/find/${saladInfo.saladId}`);
          tempSalads.push(response);
          console.log('');
        }

        setExtractedSalads(tempSalads);
        console.log('');
      } catch (error) {
        console.error('Failed to fetch salads:', error);
      }
    };

    fetchSalads();
  }, []);

  return (
    <div className={`${classes.Cart} row`}>
      <div className={`${classes.cartList} ${classes.flexItem}`}>
        {extractedSalads.map((salad) => (
          <SaladItem
            key={salad._id}
            imgSrc={`${API_BASE_URL}/images/${salad.image}`}
            saladName={salad.name}
            category={salad.category}
            price={salad.price}
          />
        ))}
      </div>
      <div className={`${classes.infoCont} ${classes.flexItem}`}>
        <FormWrapper className={classes.form}>
          <label htmlFor="cardN">Enter card number:</label>
          <InputField min="16" max="16" type="number" />
          <div className={classes.cardInfo} style={{ marginBottom: '2rem' }}>
            <div>
              <label htmlFor="date">Date of expiration</label>
              <InputField className={classes.cardItem} type="date" required />
            </div>
            <div>
              <label htmlFor="date">Date of expiration</label>
              <InputField className={classes.cardItem} type="number" min="3" max="3" required />
            </div>
          </div>
          <OrangeButton>Submit</OrangeButton>
        </FormWrapper>
      </div>
    </div>
  );
};

export default CartPage;
