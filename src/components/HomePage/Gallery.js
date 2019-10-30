import React from 'react';
import Grid from 'components/Grid/Grid.js';
import css from './Gallery.css';

function Gallery() {
  return (
    <Grid padded>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <img
            className={css.img}
            src="/static/img/home/pod-budding-square.jpg"
            alt="Cacao pod budding"
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <source
            media="(max-width: 767px)"
            srcSet="/static/img/home/pods-hanging-square.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/static/img/home/pods-hanging-rect.jpg"
          />
          <img
            className={css.img}
            src="/static/img/home/pods-hanging-rect.jpg"
            alt="Cacao pods hanging from a tree"
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <source
            media="(max-width: 767px)"
            srcSet="/img/home/cracked-bean.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/img/home/cracked-bean-768.jpg"
          />
          <img
            className={css.img}
            src="/img/home/cracked-bean.jpg"
            alt="Roasted and cracked cacao bean"
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <img
            className={css.img}
            src="/img/home/nibs-dish.jpg"
            alt="Cacao nibs in a dish"
          />
        </picture>
      </div>
    </Grid>
  );
}

export default Gallery;
