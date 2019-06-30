import React from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import getConfig from 'next/config';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import css from './IndexLayout.css';

const { publicRuntimeConfig } = getConfig();
const SITE_URL = publicRuntimeConfig.SITE_URL;

NProgress.configure({
  showSpinner: false,
});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function IndexLayout({ children }) {
  return (
    <div className={css.layout}>
      <Head>
        <title key="title">{process.env.META_TITLE}</title>
        <meta key="charset" charSet="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          key="description"
          name="description"
          content={process.env.META_DESCRIPTION}
        />
        <meta key="author" name="author" content={process.env.META_AUTHOR} />
        <meta
          key="twitterCard"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitterTitle"
          name="twitter:title"
          content={process.env.META_TITLE}
        />
        <meta
          key="twitterDescription"
          name="twitter:description"
          content={process.env.META_DESCRIPTION}
        />
        <meta
          key="twitterImage"
          name="twitter:image"
          content={`${SITE_URL}/static/img/og/ubergreen.png`}
        />
        <meta key="twitterUrl" name="twitter:url" content={SITE_URL} />
        <meta key="ogType" property="og:type" content="website" />
        <meta
          key="ogSiteName"
          property="og:site_name"
          content="Cheeze Wizards"
        />
        <meta
          key="ogTitle"
          property="og:title"
          content={process.env.META_TITLE}
        />
        <meta
          key="ogDescription"
          property="og:description"
          content={process.env.META_DESCRIPTION}
        />
        <meta
          key="ogImage"
          property="og:image"
          content={`${SITE_URL}/static/img/og/ubergreen.png`}
        />
        <meta key="ogUrl" property="og:url" content={SITE_URL} />
        {process.env.NODE_ENV !== 'production' && (
          <link
            rel="stylesheet"
            type="text/css"
            href={`/_next/static/css/styles.chunk.css?v=${Date.now()}`}
          />
        )}
        <link rel="shortcut icon" href="/static/favicon/favicon.png" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="57x57"
          href="/static/favicon/favicon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/favicon/favicon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/favicon/favicon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/favicon/favicon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicon/favicon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/favicon/favicon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/favicon/favicon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/favicon/favicon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/favicon/favicon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/favicon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/favicon/favicon-192x192.png"
        />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;
