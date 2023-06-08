import React from 'react';
import OrangeLinkBtn from '../common/OrangeLinkBtn';

import classes from './OrderNow.module.css';

const OrderNow = (props) => {
  return (
    <div className={`${classes.OrderNowCont} row row-tb-margin`}>
      <div className={classes.OrderNow}>
        <h1>Fuel Your Cravings, Order Now!</h1>
        <p>
          Ready to indulge in a satisfying and wholesome meal? Place your order now and experience a burst of flavors
          that will leave your taste buds tingling with delight. Our carefully crafted salads, made with the freshest
          ingredients, are designed to ignite your senses and provide a healthy and fulfilling dining experience. Don't
          wait any longer – dive into a world of culinary excellence and order now to embark on a mouthwatering journey!
        </p>
        <OrangeLinkBtn btnHref="/order">Order Now!</OrangeLinkBtn>
      </div>
    </div>
  );
};

export default OrderNow;
