import React from 'react';
import Grid from 'components/Grid/Grid.js';
import css from './Banner.css';

function Banner() {
  return (
    <Grid bordered>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src="/static/img/home/chocolate.jpg"
          alt="Chocolate"
        />
      </div>
    </Grid>
  );
}

export default Banner;
