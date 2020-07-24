import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import theme from 'components/theme';
import Header from 'components/header';
import Footer from 'components/footer';
import 'react-calendar/dist/Calendar.css';

import routes from 'navigation/routes';


NProgress.configure({
  showSpinner: false
})

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
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
  }, []);

  return (
    <React.Fragment>
      <Head>
        { routeObject ?
          <>
            <title>{routeObject.title} - SAMAHAN</title>
            <meta name="description" content={routeObject.desc} />
            <meta name="twitter:card" value="summary" />
            <meta property="og:title" content={routeObject.title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://samahan.snry.xyz${routeObject.href}`} />
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