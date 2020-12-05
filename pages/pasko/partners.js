import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import dynamic from 'next/dynamic';
import sort from 'fast-sort';

const ServicesList = dynamic(() => import('components/projects/student-services-manual/services-list'));

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import WP from 'utils/wordpress';
import { cdnURL } from 'utils/constants';

const Snowfall = dynamic(() => import('react-snowfall'), { ssr: false });

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%',
    color: 'white'
  },
  
  rootContainer: {
    width: '100%',
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.rootContainer}>
      { typeof window !== "undefined" ? (
        <Snowfall />
      ) : null }
      <div style={{ backgroundColor: theme.palette.primary.main }}>
        <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
          <Grid item sm>
            <center>
              <img src="/assets/christmas-tree-2.gif" />
            </center>
          </Grid>
          <Grid item sm>
            <Typography variant="h2" component="h2" style={{ lineHeight: '0.8em', fontFamily: 'Gaegu', textAlign: 'right', fontWeight: 100, fontSize: '4rem' }}>
              Linggo ng Pasko 2020
            </Typography>
            <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em', fontFamily: 'Gaegu', textAlign: 'right', fontSize: '8rem' }}>
              Partners
            </Typography>
            <div style={{ height: 100 }}></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;
