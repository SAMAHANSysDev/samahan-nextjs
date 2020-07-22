import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import ServicesList from '../../../components/projects/student-services-manual/services-list';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  rootContainer: {
    width: '100%',
    margin: 0
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>

      <Head>
        <title>Student Services Manual - SAMAHAN</title>
        <meta name="description" content="Student Manual for Services offered by the University" />
        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content="Student Services Manual" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samahan.snry.xyz/projects/student-services-manual" />
        <meta property="og:description" content="Student Manual for Services offered by the University" />
      </Head>

      <div style={{ height: 100 }} />

      <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
        <Grid item sm>
          <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(30px + 4vw)' }}>
            SAMAHAN
          </Typography>
          <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(30px + 3vw)' }}>
            Student Services
          </Typography><br />
          <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(10px + 0.8vw)' }}>
            Student Manual for Services offered by the University
          </Typography>
          <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(10px + 0.8vw)' }}>
            samahan.addu.edu.ph
          </Typography>
        </Grid>
        <Grid item sm>
          <img src="https://samahan-cdn.snry.xyz/board-student-services.png" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <div style={{ height: 100 }}></div>

      <div style={{ margin: 'auto', width: '90%' }}>
        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <ServicesList />
          <Grid item sm>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="addusamahan"
              options={{height: 800, width: '100vw'}}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;
