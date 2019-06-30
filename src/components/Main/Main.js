import React from 'react';
import PropTypes from 'prop-types';
import css from './Main.css';

function Main({ children }) {
  return <main className={css.main}>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
