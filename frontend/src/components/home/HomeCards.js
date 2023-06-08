import React from 'react';

import classes from './HomeCards.module.css';

const HomeCards = (props) => {
  return (
    <div className={classes.cardsCont}>
      <div className={classes.card}>
        <div className={classes.cardTitle}>
          <span>
            <img src="../assets/svgs/Leaf-icon.svg" alt="Leaf icon" />
          </span>
          <h1>Freshness at the Core</h1>
        </div>
        <p>
          At <span className={classes.MySalad}>My Salad</span>, we prioritize freshness above all else. Our commitment
          to using the freshest, locally sourced ingredients ensures that every salad is bursting with vibrant flavors
          and maximum nutritional value. Experience the difference that fresh, quality ingredients make in each and
          every bite.
        </p>
      </div>

      <div className={classes.card}>
        <div className={classes.cardTitle}>
          <span>
            <img src="../assets/svgs/Che-icon.svg" alt="Chef icon" />
          </span>
          <h1>Innovative Salads</h1>
        </div>
        <p>
          Our culinary team consists of skilled artisans who are passionate about creating unique and innovative salad
          combinations. We go beyond the ordinary, infusing our salads with exciting flavor profiles, unexpected
          ingredient pairings, and artistic presentations. Get ready to tantalize your taste buds and embark on a
          culinary adventure like no other.
        </p>
      </div>

      <div className={classes.card}>
        <div className={classes.cardTitle}>
          <span>
            <img src="../assets/svgs/Salad-bowl-icon.svg" alt="Salad Bowl icon" />
          </span>
          <h1>Build Your Salad</h1>
        </div>
        <p>
          An icon depicting a personalized salad bowl or a salad with customizable toppings and ingredients can visually
          represent the customization aspect. You could also use icons that illustrate different food options, such as a
          leafy green for salad greens, a piece of grilled chicken for protein, and a variety of vegetable icons to
          represent toppings.
        </p>
      </div>
    </div>
  );
};

export default HomeCards;
