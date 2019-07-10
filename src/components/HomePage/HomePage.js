import React, { Fragment } from 'react';
import Cta from 'components/Cta';
import Hero from './Hero';
import Gallery from './Gallery';
import ContentArea from './ContentArea';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Cta
        appearance="primary"
        heading="Fairly-sourced, consistent, & traceable beans"
        description="In the first call to action, we should talk about our emphasis on traceability and consistency of our supply, with a link to read more"
        action={{
          text: 'Learn more',
          href: '/about',
        }}
      />
      <Gallery />
      <Cta
        appearance="secondary"
        heading="Emphasis on organic certification of regional farms"
        description="This call to cation should focus more on helping local / regional farms achieve and maintain a high standard w/ organic certification, with a link to find out more."
        action={{
          text: 'Learn more',
          href: '/about',
        }}
      />
      <ContentArea />
    </Fragment>
  );
}

export default HomePage;
