import React from 'react';
import Heading from '../common/Heading';
import GalleryCard from './GalleryCard';

import classes from './Gallery.module.css';

const Gallery = (props) => {
  return (
    <div>
      <Heading>Chef's Picks</Heading>
      <div className={classes.GalleryGrid}>
        <GalleryCard
          pickTitle="Refreshing Citrus Salad"
          pickInfo="A refreshing blend of tangy lemon slices, juicy cherry tomato slices, crisp onion slices, fresh mint leaves, all drizzled with a hint of fragrant olive oil."
          imgSrc="assets/images/Salad1.png"
        />
        <GalleryCard
          pickTitle="Protein Power Salad"
          pickInfo="A nutritious combination of grilled chicken, boiled egg, fresh lettuce, and broccoli florets."
          imgSrc="assets/images/Salad2.png"
        />
        <GalleryCard
          pickTitle="Classic Garden Salad"
          pickInfo="A timeless combination of fresh tomato slices, crisp onion slices, crunchy cucumber slices, and crisp lettuce, perfectly tossed together for a delightful garden salad experience."
          imgSrc="assets/images/Salad3.png"
        />
        <GalleryCard
          pickTitle="Berry Medley Crunch"
          pickInfo="Indulge in the vibrant flavors of our Berry Medley Crunch salad, showcasing a delightful combination of succulent blueberries, juicy red berries, and rich blackberries. Tossed with fresh watercress and garnished with crunchy walnuts, this salad delivers a refreshing and satisfying crunch."
          imgSrc="assets/images/Salad4.png"
        />
        <GalleryCard
          pickTitle="Garden Harvest Delight"
          pickInfo="Enjoy the Garden Medley Crunch, a vibrant blend of fresh lettuce, ripe tomatoes, crisp cucumbers, and tangy red onions. Tossed with a zesty dressing, this salad delivers a delightful crunch and a burst of flavors."
          imgSrc="assets/images/Salad5.png"
        />
        <GalleryCard
          pickTitle="Mango Tango"
          pickInfo="Experience the tropical allure of our Mango Tango salad, featuring luscious mango slices that bring a burst of sweet, tangy flavor to every forkful."
          imgSrc="assets/images/Salad6.png"
        />
      </div>
    </div>
  );
};

export default Gallery;
