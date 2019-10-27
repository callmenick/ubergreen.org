import React from 'react';
import PropTypes from 'prop-types';
import css from './Heading.css';

function Heading({ as: H, children }) {
  return <H className={css.heading}>{children}</H>;
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  as: 'h2',
};

export default Heading;
