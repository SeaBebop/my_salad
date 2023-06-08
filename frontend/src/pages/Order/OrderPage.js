import React, { useEffect } from 'react';
import OrderHeader from '../../components/order/OrderHeader';
import CategorySwitch from '../../components/order/CategorySwitch';

import classes from './OrderPage.module.css';

const OrderPage = (props) => {
  useEffect(() => {
    document.title = 'Order Page';
  }, []);

  return (
    <main>
      <OrderHeader />
      <CategorySwitch />
    </main>
  );
};

export default OrderPage;
