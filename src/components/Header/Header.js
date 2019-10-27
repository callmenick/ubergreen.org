import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import cx from 'classnames';
import Grid from 'components/Grid/Grid.js';
import Button from 'components/Button/Button.js';
import Logo from 'components/Logo/Logo.js';
import MenuIcon from 'components/MenuIcon/MenuIcon.js';
import css from './Header.css';

function Header({ router }) {
  const [menuOpen, onMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <Grid padded alignItems="center">
        <div className={css.logoWrapper}>
          <Button href="/" className={css.logo}>
            <Logo />
          </Button>
        </div>
        <div className={css.toggleWrapper}>
          <div className={css.toggle}>
            <MenuIcon
              active={menuOpen}
              onClick={() => {
                onMenuOpen(!menuOpen);
              }}
            />
          </div>
        </div>
        <nav
          className={cx(css.nav, {
            [css.active]: menuOpen,
          })}
        >
          <Button
            className={cx(css.link, {
              [css.active]: router.pathname === '/',
            })}
            href="/"
            onClick={() => {
              onMenuOpen(false);
            }}
          >
            Home
          </Button>
          <Button
            className={cx(css.link, {
              [css.active]: router.pathname === '/about',
            })}
            href="/about"
            onClick={() => {
              onMenuOpen(false);
            }}
          >
            About
          </Button>
          <Button
            className={cx(css.link, {
              [css.active]: router.pathname === '/contact',
            })}
            href="/contact"
            onClick={() => {
              onMenuOpen(false);
            }}
          >
            Contact
          </Button>
        </nav>
      </Grid>
    </header>
  );
}

Header.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Header);
