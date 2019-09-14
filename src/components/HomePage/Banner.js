import React from 'react';
import Grid from 'components/Grid';
import css from './Banner.css';

function Banner() {
  return (
    <Grid padded>
      <div className={css.imgWrapper}>
        <img className={css.img} src="/static/img/placeholder/p2.svg" alt="" />
      </div>
    </Grid>
  );
}

export default Banner;
