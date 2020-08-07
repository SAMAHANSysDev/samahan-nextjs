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
  
  motionLogoContainer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  note1: {
    backgroundImage: `url(${cdnURL}/fiesta_note_2.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: '$noteoscill 5s infinite',
    height: '30vw',
    width: '30vw'
  },
  note2: {
    position: 'absolute',
    right: '15vw',
    top: 0,
    backgroundImage: `url(${cdnURL}/fiesta_note_1.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: '$noteoscill 2s infinite',
    height: '5vw',
    width: '5vw',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  '@keyframes noteoscill': {
    from: {
      translate: '0 0',
      transform: 'rotate(0deg)',
      animationTimingFunction: 'cubic-bezier(0.1, 0.3, 0.3, 1)'
    },
    '25%': {
      translate: '10px 0',
      transform: 'rotate(5deg)',
      animationTimingFunction: 'cubic-bezier(0.7, 0.0, 0.9, 0.7)'
    },
    '50%': {
      translate: '0 0',
      transform: 'rotate(0deg)',
      animationTimingFunction: 'cubic-bezier(0.1, 0.3, 0.3, 1)'
    },
    '75%': {
      translate: '-10px 0',
      transform: 'rotate(-5deg)',
      animationTimingFunction: 'cubic-bezier(0.7, 0.0, 0.9, 0.7)'
    },
    to: {
      translate: '0 0',
      transform: 'rotate(0deg)',
    }
  },

}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={3} alignItems="center" className={classes.headerContainer} justify="center">
      <Grid item sm className={classes.motionLogoContainer}>
        <div className={classes.note1} />
      </Grid>
      <Grid item xs={12} md={7} component={Paper} elevation={0} style={{ position: 'relative' }}>
        <div className={classes.note2} />
        <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em' }}>
          HIMIG
        </Typography>
        <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em' }}>
          BUGHAW
        </Typography><br />
        <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
          Himig Bughaw: Concert for a Cause
        </Typography>
        <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
          In partnership with the Arrupe Office of Social Formation (AOSF)
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page;
