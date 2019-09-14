import React from 'react';
import Grid from 'components/Grid';
import css from './Hero.css';

function Hero() {
  return (
    <Grid alignItems="center">
      <div className={css.cta}>
        <h1 className={css.title}>Good taste in good taste</h1>
        <p className={css.description}>
          At Ubergreen, we’re dedicated to sourcing and supplying the best True
          Trinitario cacao.
        </p>
      </div>
      <div className={css.img}>
        <img src="/static/img/placeholder/p1.svg" alt="" />
      </div>
    </Grid>
  );
}

export default Hero;
