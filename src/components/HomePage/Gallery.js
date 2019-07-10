import React from 'react';
import Grid from 'components/Grid';
import css from './Gallery.css';

function Gallery() {
  return (
    <Grid padded>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <img
            className={css.img}
            src="/static/img/placeholder/p1.svg"
            alt=""
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <source
            media="(min-width: 768px)"
            srcSet="static/img/placeholder/p2.svg"
          />
          <img
            className={css.img}
            src="/static/img/placeholder/p1.svg"
            alt=""
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <source
            media="(min-width: 768px)"
            srcSet="static/img/placeholder/p2.svg"
          />
          <img
            className={css.img}
            src="/static/img/placeholder/p1.svg"
            alt=""
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <img
            className={css.img}
            src="/static/img/placeholder/p1.svg"
            alt=""
          />
        </picture>
      </div>
    </Grid>
  );
}

export default Gallery;
