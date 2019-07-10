import React from 'react';
import Grid from 'components/Grid';
import css from './Gallery.css';

function Gallery() {
  return (
    <Grid padded>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <img className={css.img} src="/static/img/home/pod.jpg" alt="" />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <source
            media="(min-width: 768px)"
            srcSet="static/img/home/tree-768.jpg"
          />
          <img className={css.img} src="/static/img/home/tree.jpg" alt="" />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <source
            media="(min-width: 768px)"
            srcSet="static/img/home/tree-768.jpg"
          />
          <img className={css.img} src="/static/img/home/tree.jpg" alt="" />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <img className={css.img} src="/static/img/home/pod.jpg" alt="" />
        </picture>
      </div>
    </Grid>
  );
}

export default Gallery;
