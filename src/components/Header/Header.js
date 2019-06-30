import React from 'react';
import Button from 'components/Button';
import css from './Header.css';

function Header() {
  return (
    <header className={css.header}>
      <h1 className={css.title}>My Site</h1>
      <nav className={css.nav}>
        <Button className={css.link} href="/">
          Home
        </Button>
        <Button className={css.link} href="/about">
          About
        </Button>
        <Button className={css.link} href="/contact">
          Contact
        </Button>
      </nav>
    </header>
  );
}

export default Header;
