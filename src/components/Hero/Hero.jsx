import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import trinitario from 'components/Hero/trinitario.svg';
import css from 'components/Hero/Hero.module.scss';

function Hero() {
  return (
    <div id="about" className={css.container}>
      <div className={cx(css.section, css.sectionContent)}>
        <div className={css.content}>
          <p className={css.note}>
            Ubergreen’s mission is to support{' '}
            <strong>
              <span>small-scale</span>
            </strong>{' '}
            Caribbean producers who are focused on{' '}
            <strong>
              <span>flavour</span>
            </strong>
            ,{' '}
            <strong>
              <span>quality</span>
            </strong>
            , and{' '}
            <strong>
              <span>fair trade</span>
            </strong>{' '}
            over mass production.
          </p>
        </div>
      </div>
      <div className={cx(css.section, css.sectionSpacer)} />
      <div className={cx(css.section, css.sectionImage)}>
        <div className={css.content}>
          <img src={trinitario} alt="" />
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
