import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './Grid.css';

function Grid({ children, padded, alignItems }) {
  return (
    <div
      className={cx(css.grid, {
        [css.padded]: padded,
        [css[`alignItems-${alignItems}`]]: alignItems,
      })}
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  padded: PropTypes.bool,
  alignItems: PropTypes.oneOf(['stretch', 'center', 'start', 'end']),
};

Grid.defaultProps = {
  padded: false,
  alignItems: undefined,
};

export default Grid;
