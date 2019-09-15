import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './Grid.css';

function Grid({ children, gap, padded, bordered, alignItems }) {
  return (
    <div
      className={cx(css.grid, {
        [css.gap]: gap,
        [css.padded]: padded,
        [css.bordered]: bordered,
        [css[`alignItems-${alignItems}`]]: alignItems,
      })}
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.bool,
  padded: PropTypes.bool,
  bordered: PropTypes.bool,
  alignItems: PropTypes.oneOf(['stretch', 'center', 'start', 'end']),
};

Grid.defaultProps = {
  gap: true,
  padded: false,
  bordered: false,
  alignItems: undefined,
};

export default Grid;
