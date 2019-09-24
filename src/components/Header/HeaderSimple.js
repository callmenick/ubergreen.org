import React from 'react';
import Grid from 'components/Grid/Grid.js';
import Button from 'components/Button/Button.js';
import Logo from 'components/Logo/Logo.js';
import css from './HeaderSimple.css';

function HeaderSimple() {
  return (
    <header className={css.header}>
      <Grid padded>
        <div className={css.logoWrapper}>
          <Button href="/" className={css.logo}>
            <Logo />
          </Button>
        </div>
      </Grid>
    </header>
  );
}

export default HeaderSimple;
