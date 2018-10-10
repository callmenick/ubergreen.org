import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uniqueId from 'lodash/uniqueId';
import trinitario from 'components/About/trinitario.svg';
import gallery1 from 'components/About/1-cocoa-tree.jpg';
import gallery2 from 'components/About/2-cocoa-pods.jpg';
import gallery3 from 'components/About/3-cocoa-pods.jpg';
import gallery4 from 'components/About/4-cocoa-pod.jpg';
import gallery5 from 'components/About/5-cocoa-roast.jpg';
import gallery6 from 'components/About/6-chocolate.jpg';
import css from 'components/About/About.module.scss';

const gallery = [
  {
    id: uniqueId('gallery'),
    img: gallery1,
    title: 'Cocoa tree',
  },
  {
    id: uniqueId('gallery'),
    img: gallery2,
    title: 'Cocoa pods',
  },
  {
    id: uniqueId('gallery'),
    img: gallery3,
    title: 'Cocoa pods',
  },
  {
    id: uniqueId('gallery'),
    img: gallery4,
    title: 'Cocoa pod',
  },
  {
    id: uniqueId('gallery'),
    img: gallery5,
    title: 'Cocoa roast',
  },
  {
    id: uniqueId('gallery'),
    img: gallery6,
    title: 'Chocolate',
  },
];

function About() {
  return (
    <div id="about">
      <div className={css.hero}>
        <div className={cx(css.heroSection, css.heroSectionContent)}>
          <div className={css.heroContent}>
            <p className={css.heroNote}>
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
                <span>fairly sourced</span>
              </strong>{' '}
              cocoa.
            </p>
          </div>
        </div>
        <div className={cx(css.heroSection, css.heroSectionSpacer)} />
        <div className={cx(css.heroSection, css.heroSectionImage)}>
          <div className={css.heroContent}>
            <img src={trinitario} alt="True trinitario cocoa" />
          </div>
        </div>
      </div>
      <div className={css.gallery}>
        {gallery.map((item) => (
          <div key={item.id} className={css.galleryItem}>
            <img className={css.galleryImage} src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

About.propTypes = {};

About.defaultProps = {};

export default About;
