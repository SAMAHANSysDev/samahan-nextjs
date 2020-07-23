import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
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
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={3} alignItems="center" className={classes.headerContainer}>
      <Grid item sm className={classes.motionLogoContainer}>
        <img src="https://samahan-cdn.snry.xyz/Asset%202.svg" className={classes.motionLogo} />
      </Grid>
      <Grid item sm={8} component={Paper} elevation={0}>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(20px + 4vw)' }}>
          CAMPUS CLUBS
        </Typography>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(20px + 4vw)' }}>
          ORGANIZATION
        </Typography><br />
        <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(10px + 0.8vw)' }}>
          Umbrella organization for all recognized student organizations in the university
        </Typography>
        <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(10px + 0.8vw)' }}>
          samahan.addu.edu.ph
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page;
