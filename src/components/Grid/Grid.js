import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './Grid.css';

function Grid({ padded, children }) {
  return (
    <div
      className={cx(css.grid, {
        [css.padded]: padded,
      })}
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  padded: PropTypes.bool,
};

Grid.defaultProps = {
  padded: false,
};

export default Grid;
