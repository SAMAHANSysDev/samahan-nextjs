import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    width: '80%',
    margin: 'auto'
  },
  contentContainer: {
    width: '90%',
    margin: 'auto'
  },
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  motionLogoContainer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  motionLogo: {
    position: 'absolute',
    left: 100,
    top: 50,
    width: 'calc(200px + 20vw)',
    zIndex: -1
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={3} alignItems="center" className={classes.headerContainer}>
      <img src={`${cdnURL}/Asset%202.svg`} className={classes.motionLogo} />
      <Grid item sm className={classes.motionLogoContainer}>
      </Grid>
      <Grid item sm={8} component={Paper} elevation={0}>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em' }}>
          CAMPUS CLUBS
        </Typography>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em' }}>
          ORGANIZATION
        </Typography><br />
        <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
          Umbrella organization for all recognized student organizations in the university
        </Typography>
        <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
          samahan.addu.edu.ph
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page;
