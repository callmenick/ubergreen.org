import React, { Fragment } from 'react';
import PageHeader from 'components/PageHeader';
import PageContent from 'components/PageContent';

function AboutPage() {
  return (
    <Fragment>
      <PageHeader appearance="primary" title="About us" />
      <PageContent>about page</PageContent>
    </Fragment>
  );
}

export default AboutPage;
