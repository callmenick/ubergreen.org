import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'components/Grid/Grid.js';
import css from './PageContent.css';

function PageContent({ children }) {
  return (
    <div className={css.wrapper}>
      <Grid padded>
        <div className={css.content}>{children}</div>
      </Grid>
    </div>
  );
}

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

PageContent.defaultProps = {};

export default PageContent;
