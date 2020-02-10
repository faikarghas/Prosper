import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress'
import { StoreProvider } from "../lib/store";

import '../sass/main.scss';

// NProgress
Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
    // handler refresh back button history
    componentDidMount() {
        Router.beforePopState(({as}) => {
          location.href = as;
        });
    }
    render() {
        const { Component, pageProps } = this.props
        return (
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        )
    }
}

export default MyApp
