import React, { useEffect } from 'react';
import HomeHeader from '../../components/home/HomeHeader';
import BehindTheGreens from '../../components/home/BehindTheGreens';
import Gallery from '../../components/home/Gallery';
import OrderNow from '../../components/home/OrderNow';

import classes from './HomePage.module.css';

const HomePage = (props) => {
  useEffect(() => {
    document.title = 'Home Page';
  }, []);

  return (
    <main className={classes.homePage}>
      <HomeHeader />
      <BehindTheGreens />
      <Gallery />
      <OrderNow />
    </main>
  );
};

export default HomePage;
