import React from 'react';
import PropTypes from 'prop-types';
import logo from 'components/Header/logo.svg';
import css from 'components/Header/Header.module.scss';

function Header() {
  return (
    <header className={css.container}>
      <nav className={css.nav}>
        <img className={css.logo} src={logo} alt="" />
        <ul className={css.navList}>
          <li className={css.navItem}>
            <a href="#about">About</a>
          </li>
          <li className={css.navItem}>
            <a href="#order">Order</a>
          </li>
          <li className={css.navItem}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={css.content}>
        <h1 className={css.title}>
          Fairly Sourced True
          <br />
          Trinitario Cocoa
        </h1>
        <a className={css.more} href="#about">
          Learn more
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
