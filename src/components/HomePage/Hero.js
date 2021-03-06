import React from 'react';
import Grid from 'components/Grid/Grid.js';
import Button from 'components/Button/Button.js';
import css from './Hero.css';

function Hero() {
  return (
    <Grid padded>
      <div className={css.cta}>
        <div className={css.ctaInner}>
          <h1 className={css.title}>
            We source the finest organic True Trinitario cacao
          </h1>
          <p className={css.description}>
            At Ubergreen, we’re dedicated to sourcing the finest True Trinitario
            cacao. We team up with sustainable, small scale local farms to
            deliver top quality cacao to you.
          </p>
          <div className={css.button}>
            <Button
              theme={{
                appearance: 'secondary',
                size: 'md',
              }}
              href="/contact"
            >
              Get a taste
            </Button>
          </div>
        </div>
      </div>
      <div className={css.img}>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/img/home/beans-in-hand-rect.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/img/home/beans-in-hand-square.jpg"
          />
          <img
            src="/img/home/beans-in-hand-square.jpg"
            alt="Cacao beans in hands"
          />
        </picture>
      </div>
    </Grid>
  );
}

export default Hero;
