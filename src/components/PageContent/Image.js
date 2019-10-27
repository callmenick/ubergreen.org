import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './Image.css';

function Image({ src, alt, start, end }) {
  return (
    <div className={cx(css.image, css[`pos-${start}-${end}`])}>
      <img src={src} alt={alt} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
};

Image.defaultProps = {
  start: 1,
  end: -1,
};

export default Image;
