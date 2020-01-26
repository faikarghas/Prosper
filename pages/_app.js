import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress'

import '../sass/main.scss'
import 'react-multi-carousel/lib/styles.css'

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
                <Component {...pageProps} />
        )
    }
}

export default MyApp
