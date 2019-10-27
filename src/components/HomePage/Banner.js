import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'components/Grid/Grid.js';
import css from './Banner.css';

function Banner({ img, alt }) {
  return (
    <Grid padded>
      <div className={css.imgWrapper}>
        <img className={css.img} src={img} alt={alt} />
      </div>
    </Grid>
  );
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Banner;
