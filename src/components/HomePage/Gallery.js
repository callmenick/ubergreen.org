import React from 'react';
import Grid from 'components/Grid';
import css from './Gallery.css';

function Gallery() {
  return (
    <Grid bordered>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <img className={css.img} src="/static/img/home/pod-2.jpg" alt="" />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <source
            media="(max-width: 767px)"
            srcSet="/static/img/home/cracked-pod.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/static/img/home/cracked-pod-768.jpg"
          />
          <img
            className={css.img}
            src="/static/img/home/cracked-pod.jpg"
            alt=""
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <source
            media="(max-width: 767px)"
            srcSet="/static/img/home/cracked-bean.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/static/img/home/cracked-bean-768.jpg"
          />
          <img
            className={css.img}
            src="/static/img/home/cracked-bean.jpg"
            alt=""
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <img
            className={css.img}
            src="/static/img/home/nibs-dish.jpg"
            alt=""
          />
        </picture>
      </div>
    </Grid>
  );
}

export default Gallery;
