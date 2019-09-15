import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button.js';
import css from './MenuIcon.css';

function MenuIcon({ active, color, onClick }) {
  return (
    <div className={css.iconWrapper}>
      <Button onClick={onClick}>
        <svg className={css.icon} width="100%" viewBox="0 0 24 24">
          <g fill={color} fillRule="evenodd">
            {active ? (
              <Fragment>
                <rect
                  transform="rotate(45 12 12.5)"
                  x="4"
                  y="11.5"
                  width="16"
                  height="2"
                  rx="1"
                />
                <rect
                  transform="rotate(-45 12 12.5)"
                  x="4"
                  y="11.5"
                  width="16"
                  height="2"
                  rx="1"
                />
              </Fragment>
            ) : (
              <Fragment>
                <rect x="4" y="5" width="16" height="2" rx="1" />
                <rect x="4" y="11" width="16" height="2" rx="1" />
                <rect x="4" y="17" width="16" height="2" rx="1" />
              </Fragment>
            )}
          </g>
        </svg>
      </Button>
    </div>
  );
}

MenuIcon.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

MenuIcon.defaultProps = {
  active: false,
  color: '#1a151e',
  onClick: () => {},
};

export default MenuIcon;
