import React, { useState, useEffect } from 'react';
import CardWrapper from '../common/CardWrapper';
import SaladCard from './SaladCard';
import { api, API_BASE_URL } from '../../services/api';

import classes from './LoadVegetables.module.css';

const LoadVegetables = (props) => {
  const [vegetableSalads, setVegetableSalads] = useState([]);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchSalads = async () => {
      try {
        const response = await api.get('api/salads', token, { category: 'vegetable' });
        setVegetableSalads(response);
      } catch (error) {
        console.error('Failed to fetch salads:', error);
      }
    };

    fetchSalads();
  }, []);

  return (
    <CardWrapper classesPassed={classes.CardWrapper}>
      {vegetableSalads.map((salad) => (
        <SaladCard
          key={salad._id}
          saladId={salad._id}
          saladName={salad.name}
          category={salad.category}
          price={salad.price}
          imgSrc={`${API_BASE_URL}/images/${salad.image}`}
        />
      ))}
      {vegetableSalads.length === 0 ? <h3>There is nothing to see :(</h3> : ''}
    </CardWrapper>
  );
};

export default LoadVegetables;
