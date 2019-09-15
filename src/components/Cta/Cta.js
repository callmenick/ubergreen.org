import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from 'components/Button/Button.js';
import Grid from 'components/Grid/Grid.js';
import css from './Cta.css';

const buttonAppearances = {
  default: 'primary',
  primary: 'primaryReverse',
  secondary: 'default',
};

function Cta({ heading, description, action, appearance }) {
  return (
    <div className={cx(css.cta, css[appearance])}>
      <Grid padded>
        <div className={css.content}>
          <h2 className={css.heading}>{heading}</h2>
          <p className={css.description}>{description}</p>
          <div className={css.action}>
            <Button
              href={action.href}
              theme={{
                appearance: buttonAppearances[appearance],
                size: 'md',
              }}
            >
              {action.text}
            </Button>
          </div>
        </div>
      </Grid>
    </div>
  );
}

Cta.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
  appearance: PropTypes.oneOf(['default', 'primary', 'secondary']).isRequired,
};

Cta.defaultProps = {};

export default Cta;
