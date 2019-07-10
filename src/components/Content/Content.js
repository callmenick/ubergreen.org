import React from 'react';
import PropTypes from 'prop-types';
import css from './Content.css';

function Content({ children }) {
  return <div className={css.content}>{children}</div>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
