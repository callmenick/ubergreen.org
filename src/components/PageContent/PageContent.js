import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'components/Grid/Grid.js';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Image from './Image';
import css from './PageContent.css';

function PageContent({ children }) {
  return (
    <div className={css.wrapper}>
      <Grid padded>{children}</Grid>
    </div>
  );
}

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

PageContent.defaultProps = {};

export { Heading, Paragraph, Image };
export default PageContent;
