import React from 'react';
import Grid from 'components/Grid';
import css from './Hero.css';

function Hero() {
  return (
    <Grid gap={false} bordered>
      <div className={css.cta}>
        <div className={css.ctaInner}>
          <h1 className={css.title}>Good taste in good taste</h1>
          <p className={css.description}>
            At Ubergreen, we’re dedicated to sourcing and supplying the best
            True Trinitario cacao.
          </p>
        </div>
      </div>
      <div className={css.img}>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/static/img/home/nibs.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/static/img/home/nibs-square.jpg"
          />
          <img
            src="/static/img/home/nibs-square.jpg"
            alt="Cacao nibs in a dish"
          />
        </picture>
      </div>
    </Grid>
  );
}

export default Hero;
