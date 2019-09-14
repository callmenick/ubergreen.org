import React, { Fragment } from 'react';
import Cta from 'components/Cta';
import Hero from './Hero';
import Gallery from './Gallery';
import Banner from './Banner';
import ContentArea from './ContentArea';

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
