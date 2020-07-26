import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    width: '80%',
    margin: 'auto'
  },
  contentContainer: {
    width: '90%',
    margin: 'auto'
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
        <DescriptionIcon className={classes.motionLogo} />
      </Grid>
      <Grid item sm={8} component={Paper} elevation={0}>
        <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em' }}>
          SAMAHAN
        </Typography>
        <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em' }}>
          DOCUMENTS
        </Typography><br />
        <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
          Official Document Source and Free Downloadables
        </Typography>
        <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
          samahan.addu.edu.ph
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page;
