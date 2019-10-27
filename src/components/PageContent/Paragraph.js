import React from 'react';
import PropTypes from 'prop-types';
import css from './Paragraph.css';

function Paragraph({ children }) {
  return <p className={css.p}>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
