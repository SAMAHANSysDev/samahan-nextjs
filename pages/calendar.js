import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  calendarContainer: {
    width: '80%',
    margin: 'auto',
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
        <title>Calendar - SAMAHAN</title>
        <meta name="description" content="Comprehensive Timeline of Student Activities" />
        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content="Calendar" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samahan.snry.xyz/calendar" />
        <meta property="og:description" content="Comprehensive Timeline of Student Activities" />
      </Head>
      {/* Insert header here! */}
      <img src="https://samahan-cdn.snry.xyz/1.-June.png" width="100%" />
      <div style={{ height: 100 }} />
      <div className={classes.calendarContainer}>
        <Calendar />
      </div>
    </div>
  );
};

export default Page;