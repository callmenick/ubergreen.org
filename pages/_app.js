import React from 'react';
import App from 'next/app';
import IndexLayout from 'layouts/IndexLayout.js';
import 'styles/styles.css';

class UbergreenApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <IndexLayout>
        <Component {...pageProps} />
      </IndexLayout>
    );
  }
}

export default UbergreenApp;
