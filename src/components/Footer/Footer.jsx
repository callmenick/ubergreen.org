import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Footer/Footer.module.scss';

function Footer() {
  return (
    <footer id="contact" className={css.container}>
      <span className={css.email}>
        For general inquiries, email{' '}
        <a href="mailto:tobias@ubergreen.org">tobias@ubergreen.org</a>
      </span>
      <span className={css.copyright}>© Ubergreen</span>
    </footer>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
