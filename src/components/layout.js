import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import Header from 'components/Header/Header';
import About from 'components/About/About';
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
              content: data.site.siteMetadata.description,
            },
            {
              property: 'og:title',
              content: data.site.siteMetadata.title,
            },
            {
              property: 'og:site_name',
              content: 'Ubergreen',
            },
            {
              property: 'og:description',
              content: data.site.siteMetadata.description,
            },
            {
              property: 'og:image',
              content: 'https://ubergreen.org/img/og.png',
            },
            {
              property: 'og:url',
              content: 'https://ubergreen.org/',
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <About />
        <Benefits />
        <Footer />
      </Fragment>
    )}
  />
);

Layout.propTypes = {};

export default Layout;
