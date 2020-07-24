import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CalendarIcon from '@material-ui/icons/CalendarToday';

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
    fontSize: '20vw',
    color: theme.palette.primary.main,
    float: 'right'
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={3} alignItems="center" className={classes.headerContainer} justify="center">
      <Grid item sm className={classes.motionLogoContainer}>
        <CalendarIcon className={classes.motionLogo} />
      </Grid>
      <Grid item sm={7} component={Paper} elevation={0}>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em' }}>
          SAMAHAN
        </Typography>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em' }}>
          CALENDAR
        </Typography><br />
        <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
          Comprehensive Timeline of Student Activities
        </Typography>
        <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
          samahan.addu.edu.ph
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page;
