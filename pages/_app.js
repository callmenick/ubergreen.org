import React from 'react';
import App from 'next/app';
import IndexLayout from 'layouts/IndexLayout';
import { unregister } from 'sw/sw';
import 'styles/styles.css';
unregister();

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
