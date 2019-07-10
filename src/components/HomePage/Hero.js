import React from 'react';
import Grid from 'components/Grid';
import css from './Hero.css';

function Hero() {
  return (
    <Grid alignItems="center">
      <div className={css.cta}>
        <h1 className={css.title}>Hero content</h1>
        <p className={css.description}>
          Main points need to be driven here. Talking about fairness,
          consistency, traceability, organic certification, and connecting
          regional farmers to suppliers around the world.
        </p>
      </div>
      <div className={css.img}>
        <img src="/static/img/placeholder/p1.svg" alt="" />
      </div>
    </Grid>
  );
}

export default Hero;
