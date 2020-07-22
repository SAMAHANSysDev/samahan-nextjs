import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  
  rootContainer: {
    width: '100%',
    margin: 0
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <Head>
        <title>CCO Clubs - SAMAHAN</title>
        <meta name="description" content="Clubs and Organizations of the Ateneo de Davao University" />
        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content="CCO Clubs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samahan.snry.xyz/cco/clubs" />
        <meta property="og:description" content="Clubs and Organizations of the Ateneo de Davao University" />
      </Head>
      {/* Insert header here! */}
      Hello World!
    </div>
  );
};

export default Page;
