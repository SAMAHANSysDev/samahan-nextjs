import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

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
    width: '95%'
  },
  
  rootContainer: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    minHeight: '90vh',
    [theme.breakpoints.up('sm')]: {
      backgroundImage: 'url("/assets/banner_ribbon.png")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
    },
    backgroundImage: 'url("/assets/christmas-tree-2.gif")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  bannerLeft: {
    background: 'url("/assets/christmas-tree.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'right center',
    width: '100%',
    height: '85vh',
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      { typeof window !== "undefined" ? (
        <Snowfall />
      ) : null }
      <Hidden xsDown>
        <Grid container direction="row" alignItems="center" style={{ height: '80%', paddingTop: 20 }}>
          <Grid item sm={7} md={6} component="div" className={classes.bannerLeft} />
        </Grid>
      </Hidden>  
    </div>
  );
};

export default Page;
