import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ClubsList from 'components/cco/clubs';
import CCOBanner from 'components/cco/banner';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
    position: 'relative'
  },
  motionLogo: {
    position: 'absolute',
    left: 0,
    top: -300,
    width: 600,
    zIndex: -1
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <div style={{ height: 100 }} />

      <CCOBanner />
      
      <div style={{ height: 100 }} />
      
      <div className={classes.contentContainer}>
        <ClubsList />
      </div>
    </div>
  );
};

export default Page;
