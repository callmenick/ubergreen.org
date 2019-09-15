import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import cx from 'classnames';
import Grid from 'components/Grid';
import Button from 'components/Button';
import Logo from 'components/Logo';
import MenuIcon from 'components/MenuIcon';
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
          <span className={css.description}>
            Fair trade, true Trinitario Cacao
          </span>
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
