import React, { Fragment } from 'react';
import PageHeader from 'components/PageHeader/PageHeader';
import PageContent, { Image } from 'components/PageContent/PageContent';
import Button from 'components/Button/Button';
import Instagram from 'components/Icons/Instagram';
import css from './ContactPage.css';

function ContactPage() {
  return (
    <Fragment>
      <PageHeader appearance="secondary" title="Get in touch" />
      <PageContent>
        <div className={css.info}>
          <h3>
            Let’s delight the world with
            <br />
            True Trinitaro Cacao!
          </h3>
          <p>
            At Ubergreen Organics, we’re passionate about cacao – specifically,
            we love sharing True Triniatario cacao with the world. Get in touch
            with us to get a taste!
          </p>
          <ul>
            <li>
              <a href="mailto:info@ubergreen.org">info@ubergreen.org</a>
            </li>
            <li>
              <a href="tel:+18683588725">+1 (868) 358-8725</a>
            </li>
          </ul>
          <p>
            Ubergreen Organics Limited
            <br />
            2D Fort Williams
            <br />
            St. James, Trindad & Tobago
            <br />
            West Indies
          </p>
          <p>
            <Button
              href="https://www.instagram.com/ubergreencocoa/"
              target="_blank"
            >
              <Instagram fill="#00935B" />
            </Button>
          </p>
        </div>
        <Image src="/img/about/pods.jpg" alt="bean" start={7} end={-2} />
      </PageContent>
    </Fragment>
  );
}

export default ContactPage;
