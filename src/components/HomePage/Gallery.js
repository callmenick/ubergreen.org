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
            src="/img/home/cacao-tree-flowers.jpg"
            alt="Cacao tree with flowers"
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <source
            media="(max-width: 767px)"
            srcSet="/img/home/pod-budding-square.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/img/home/pod-budding-rect.jpg"
          />
          <img
            className={css.img}
            src="/img/home/pod-budding-rect.jpg"
            alt="Cacao pod budding"
          />
        </picture>
      </div>
      <div className={css.imgWrapper}>
        <picture className={css.picture}>
          <img
            className={css.img}
            src="/img/home/pods-hanging-banner.jpg"
            alt="Cacao pods hanging from a tree"
          />
        </picture>
      </div>
    </Grid>
  );
}

export default Gallery;
