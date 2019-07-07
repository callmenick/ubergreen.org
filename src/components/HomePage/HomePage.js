import React, { Fragment } from 'react';
import Cta from 'components/Cta';
import Hero from './Hero';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Cta
        heading="Fairly-sourced, consistent, & traceable beans"
        description="In the first call to action, we should talk about our emphasis on traceability and consistency of our supply, with a link to read more"
        action={{
          text: 'Learn more',
          href: '/about',
        }}
        appearance="primary"
      />
      <div>more stuff</div>
    </Fragment>
  );
}

export default HomePage;
