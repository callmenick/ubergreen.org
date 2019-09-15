import React from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import css from './IndexLayout.css';

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
          content={`${process.env.SITE_URL}/static/img/og/ubergreen.png`}
        />
        <meta
          key="twitterUrl"
          name="twitter:url"
          content={process.env.SITE_URL}
        />
        <meta key="ogType" property="og:type" content="website" />
        <meta
          key="ogSiteName"
          property="og:site_name"
          content={process.env.META_TITLE}
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
          content={`${process.env.SITE_URL}/static/img/og/ubergreen.png`}
        />
        <meta key="ogUrl" property="og:url" content={process.env.SITE_URL} />
        {process.env.NODE_ENV !== 'production' && (
          <link
            rel="stylesheet"
            type="text/css"
            href={`/_next/static/css/styles.chunk.css?v=${Date.now()}`}
          />
        )}
        <link rel="shortcut icon" href="/static/img/icons/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/img/icons/favicon.png"
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
