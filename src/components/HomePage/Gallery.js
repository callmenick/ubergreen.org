import React from 'react';
import Grid from 'components/Grid';
import css from './Gallery.css';

function Gallery() {
  return (
    <Grid padded>
      <div className={css.imgWrapper}>
        <img className={css.img} src="/static/img/placeholder/p1.svg" alt="" />
      </div>
      <div className={css.imgWrapper}>
        <img className={css.img} src="/static/img/placeholder/p2.svg" alt="" />
      </div>
      <div className={css.imgWrapper}>
        <img className={css.img} src="/static/img/placeholder/p2.svg" alt="" />
      </div>
      <div className={css.imgWrapper}>
        <img className={css.img} src="/static/img/placeholder/p1.svg" alt="" />
      </div>
    </Grid>
  );
}

export default Gallery;
