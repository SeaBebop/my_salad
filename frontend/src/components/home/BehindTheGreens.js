import React from 'react';
import Heading from '../common/Heading';
import HomeCards from './HomeCards';

import classes from './BehindTheGreens.module.css';

const BehindTheGreens = (props) => {
  return (
    <section className={`${classes.BTG} row row-tb-margin`}>
      <Heading>
        <div>
          <span>Behind the </span>
          <span style={{ color: 'var(--green)' }}>Greens</span>
        </div>
      </Heading>
      <p>
        At <span className={classes.BTGMySalad}>My Salad</span>, we pride ourselves on crafting visually stunning and
        irresistibly delicious salads. Our culinary artisans meticulously create a variety of mouthwatering options that
        will leave you craving for more. Using the finest ingredients, we curate salads that are a perfect blend of
        vibrant colors, textures, and flavors. Experience the artistry of our salads and indulge in a dining experience
        that satisfies both your taste buds and your eyes. Discover our menu and embark on a journey of culinary delight
        at My Salad.
      </p>
      <HomeCards />
    </section>
  );
};

export default BehindTheGreens;
