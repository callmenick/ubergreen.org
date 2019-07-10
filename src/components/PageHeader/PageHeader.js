import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './PageHeader.css';

function PageHeader({ title, appearance }) {
  return (
    <div className={cx(css.pageHeader, css[`appearance-${appearance}`])}>
      <h1 className={css.title}>{title}</h1>
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  appearance: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

export default PageHeader;
