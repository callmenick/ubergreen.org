import React, { Fragment } from 'react';
import PageHeader from 'components/PageHeader/PageHeader.js';
import PageContent from 'components/PageContent/PageContent.js';

function AboutPage() {
  return (
    <Fragment>
      <PageHeader appearance="primary" title="About us" />
      <PageContent>about page</PageContent>
    </Fragment>
  );
}

export default AboutPage;
