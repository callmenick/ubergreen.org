import React from 'react';
import css from './Logo.css';

function Logo() {
  return (
    <img className={css.logo} src="/img/logo/logo-og.svg" alt="Ubergreen" />
  );
}

export default Logo;
