import React, { Fragment } from 'react';
import Cta from 'components/Cta/Cta.js';
import Hero from './Hero.js';
import Gallery from './Gallery.js';
import Banner from './Banner.js';
import ContentArea from './ContentArea.js';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Cta
        appearance="primary"
        heading="You know where it comes from"
        description="Transparent supply chain messaging"
        action={{
          text: 'Learn more',
          href: '/about',
        }}
      />
      <Gallery />
      <Cta
        appearance="secondary"
        heading="You know who’s making it"
        description="Local / regional farms, etc etc"
        action={{
          text: 'Learn more',
          href: '/about',
        }}
      />
      <Banner />
      <Cta
        appearance="primary"
        heading="You know it’s high quality"
        description="Organic certification"
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
