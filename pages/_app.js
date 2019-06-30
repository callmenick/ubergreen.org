import React from 'react';
import App, { Container } from 'next/app';
import IndexLayout from 'layouts/IndexLayout';
import { UhOh } from 'components/ErrorPage';
import 'styles/styles.css';

class UbergreenApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = {
    hasError: false,
  };

  render() {
    const { Component, pageProps } = this.props;

    if (this.state.hasError) {
      return <UhOh />;
    }

    return (
      <Container>
        <IndexLayout>
          <Component {...pageProps} />
        </IndexLayout>
      </Container>
    );
  }
}

export default UbergreenApp;
