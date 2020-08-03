/**
 * 
 * Next.js uses the _app component to initialize pages.
 * Overriding this component allows you to do amazing things like:
 *  - Persisting layout between page changes (header/footer)
 *  - Keeping state when navigating pages
 *  - Custom error handling
 *  - Injecting additional data into pages
 *  - Adding global CSS
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import theme from 'components/theme';

import dynamic from 'next/dynamic';
const Header = dynamic(() => import('components/header'));
const Footer = dynamic(() => import('components/footer'));

import "react-responsive-carousel/lib/styles/carousel.min.css";

import routes from 'navigation/routes';
import { frontendURL, cdnURL } from 'utils/constants';
import * as gtag from 'utils/gtag';


NProgress.configure({
  showSpinner: false
})

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = (url) => {
  gtag.pageview(url);
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function SamahanFrontend(props) {
  const { Component, pageProps } = props;

  const router = useRouter();

  const findRouteObject = () => {
    var submenuObject = null;
    const menuObject = routes.find((route) => {
      if ('submenu' in route) {
        submenuObject = route.submenu.find((subroute) => 
          subroute.href === router.pathname
        );
        return submenuObject;
      } else {
        return route.href === router.pathname;
      }
    });
    return submenuObject ? submenuObject : menuObject;
  }

  const routeObject = findRouteObject();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    
    router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        { routeObject ?
          <>
            <title>{routeObject.title} - SAMAHAN</title>
            <meta name="description" content={routeObject.desc} />
            <meta name="twitter:card" value="summary" />
            <meta name="twitter:image" content={`${cdnURL}/samahan-seo-twitter-default.png`} />
            <meta property="og:title" content={routeObject.title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`${cdnURL}/samahan-seo-default.png`} />
            <meta property="og:url" content={`${frontendURL}${routeObject.href}`} />
            <meta property="og:description" content={routeObject.desc} />
          </>
          : <title>SAMAHAN</title> }
        <meta name="description" content="Samahan ng mga mag-aaral ng pamantasan ng Ateneo de Davao" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

SamahanFrontend.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};