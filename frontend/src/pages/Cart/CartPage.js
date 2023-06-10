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
  const [extractedSalads, setExtractedSalads] = useState([]);
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const fetchSalads = async () => {
      try {
        const checkCart = await api.get(`api/carts/find/${userId}`, token);

        const tempSalads = [];

        for (let i = 0; i < checkCart.salads.length; i++) {
          const saladInfo = checkCart.salads[i];
          const response = await api.get(`api/salads/find/${saladInfo.saladId}`);
          setTotal((prev) => prev + response.price * saladInfo.quantity);

          tempSalads.push(response);
        }

        setExtractedSalads(tempSalads);
      } catch (error) {
        console.error('Failed to fetch salads:', error);
      }
    };

    fetchSalads();
  }, [token]);

  const creditCardValidation = (event) => {
    const cardNumber = event.target.value;
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    setIsCardNumberValid(regex.test(cardNumber));
  };

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
          <InputField isvalid={isCardNumberValid} onChange={creditCardValidation} type="number" required />
          <div className={classes.cardInfo} style={{ marginBottom: '2rem' }}>
            <div className={classes.cardInfoItem}>
              <label htmlFor="date">Date of expiration</label>
              <InputField className={classes.cardItem} type="date" required />
            </div>
            <div className={classes.cardInfoItem}>
              <label htmlFor="date">CCV</label>
              <InputField className={classes.cardItem} type="number" min="3" max="3" required />
            </div>
          </div>
          <div className={classes.total}>
            <h2>{total.toFixed(2)}$</h2>
          </div>
          <OrangeButton>Submit</OrangeButton>
        </FormWrapper>
      </div>
    </div>
  );
};

export default CartPage;