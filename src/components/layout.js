import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import Benefits from 'components/Benefits/Benefits';
import Order from 'components/Order/Order';
import Footer from 'components/Footer/Footer';
import 'index.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Ubergreen’s mission is to support small-scale Caribbean producers who are focused on flavour, quality, and fairly sourced cocoa.',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Hero />
        <Benefits />
        <Order />
        <Footer />
      </Fragment>
    )}
  />
);

Layout.propTypes = {};

export default Layout;
