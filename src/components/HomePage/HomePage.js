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
        heading="Traceable right back to the farm"
        description="We’re strong believers in keeping a fully traceable and transparent supply chain. That’s why our cacao can be traced from your hands, right back to the hands that grew it."
        action={{
          text: 'Learn more',
          href: 'mailto:info@ubergreen.org',
        }}
      />
      <Gallery />
      <Cta
        appearance="secondary"
        heading="Grown on small scale farms, produced in top class facilities"
        description="Our companion farms are small scale, and sustainable, and our nibs are produced in high class facilities. We continuously improve our knowledge on all fronts, and make use of modern and progressive farming and production techniques."
        action={{
          text: 'Learn more',
          href: 'mailto:info@ubergreen.org',
        }}
      />
      <Banner img="/static/img/home/chocolate.jpg" alt="Chocolate" />
      <Cta
        appearance="primary"
        heading="High quality, certified organic, no compromises"
        description="Exquisite chocolate is born out of high quality cacao, and that’s why we don’t compromise on our standards. All of our farms are certified organic, and we maintain high standards all the way through."
        action={{
          text: 'Get in touch',
          href: 'mailto:info@ubergreen.org',
        }}
      />
      <Banner img="/static/img/home/pods.jpg" alt="Two cacao pods on a table" />
      <ContentArea />
    </Fragment>
  );
}

export default HomePage;
