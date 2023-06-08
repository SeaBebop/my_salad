import React from 'react';

import classes from './GalleryCard.module.css';

const GalleryCard = (props) => {
  return (
    <figure className={classes.galleryCard} style={{ backgroundImage: `url(${props.imgSrc})` }}>
      <div className={classes.cardInfo}>
        <h2>{props.pickTitle}</h2>
        <p>{props.pickInfo}</p>
      </div>
    </figure>
  );
};

export default GalleryCard;
