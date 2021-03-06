import React from 'react';
import PropTypes from 'prop-types';

function Instagram({ fill }) {
  return (
    <svg width="31" height="30" viewBox="0 0 30 30">
      <g fill={fill} fillRule="nonzero">
        <path d="M19.71 7.96h-9.058c-1.446 0-2.622 1.158-2.622 2.581v8.918c0 1.423 1.176 2.581 2.622 2.581h9.059c1.446 0 2.622-1.158 2.622-2.581V10.54c0-1.423-1.176-2.581-2.622-2.581zm-4.529 11.675c-2.596 0-4.708-2.079-4.708-4.635 0-2.556 2.112-4.635 4.708-4.635 2.597 0 4.71 2.08 4.71 4.635 0 2.556-2.114 4.635-4.71 4.635zm4.86-8.312a1.107 1.107 0 0 1-1.114-1.096c0-.605.5-1.097 1.115-1.097.614 0 1.114.492 1.114 1.097 0 .604-.5 1.096-1.114 1.096z" />
        <path d="M15.181 12.324c-1.499 0-2.719 1.2-2.719 2.676 0 1.476 1.22 2.677 2.72 2.677 1.499 0 2.718-1.201 2.718-2.677 0-1.475-1.22-2.676-2.719-2.676z" />
        <path d="M15.181 0C6.788 0-.016 6.698-.016 14.96c0 8.261 6.804 14.96 15.197 14.96 8.393 0 15.197-6.699 15.197-14.96C30.378 6.698 23.574 0 15.181 0zm9.142 19.459c0 2.503-2.069 4.54-4.612 4.54h-9.06c-2.542 0-4.611-2.037-4.611-4.54V10.54c0-2.503 2.069-4.54 4.612-4.54h9.059c2.543 0 4.612 2.037 4.612 4.54v8.918z" />
      </g>
    </svg>
  );
}

Instagram.propTypes = {
  fill: PropTypes.string,
};

Instagram.defaultProps = {
  fill: '#fff',
};

export default Instagram;
