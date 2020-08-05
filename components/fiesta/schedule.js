import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: 30
  },
  '@keyframes balloonoscil': {
    from: {
      translate: '0 0',
      transform: 'rotate(0deg)',
      animationTimingFunction: 'cubic-bezier(0.1, 0.3, 0.3, 1)'
    },
    '25%': {
      translate: '10px 0',
      transform: 'rotate(10deg)',
      animationTimingFunction: 'cubic-bezier(0.7, 0.0, 0.9, 0.7)'
    },
    '50%': {
      translate: '0 0',
      transform: 'rotate(0deg)',
      animationTimingFunction: 'cubic-bezier(0.1, 0.3, 0.3, 1)'
    },
    '75%': {
      translate: '-10px 0',
      transform: 'rotate(-10deg)',
      animationTimingFunction: 'cubic-bezier(0.7, 0.0, 0.9, 0.7)'
    },
    to: {
      translate: '0 0',
      transform: 'rotate(0deg)',
    }
  },
  schedContainer: {
    position: 'relative',
    color: '#01253C',
    backgroundImage: `url(${cdnURL}/fiesta_sched_bg.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: 100,
    paddingBottom: 100
  },
  schedBalloon: {
    backgroundImage: `url("${cdnURL}/fiesta_purple_balloon.png")`,
    backgroundRepeat: 'no-repeat',
    width: '10vw',
    height: '14vw',
    backgroundSize: 'contain',
    position: 'absolute',
    animation: '$balloonoscil 5s infinite',
    top: '-10vw',
    left: '45vw',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  schedSun: {
    backgroundImage: `url("${cdnURL}/fiesta_sun.png")`,
    backgroundRepeat: 'no-repeat',
    width: '18vw',
    height: '14vw',
    backgroundSize: 'contain',
    position: 'absolute',
    animation: '$move_sun 3s infinite',
    top: '-5vw',
    left: '5vw',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  '@keyframes move_sun': {
    from: {
      translate: '0 0',
      transform: 'rotate(0deg)',
    },
    to: {
      translate: '0 0',
      transform: 'rotate(360deg)',
    }
  },
  schedCloud: {
    position: 'absolute',
    top: '3vw',
    left: 0,
    width: '30vw',
    height: '10vw',
    backgroundImage: `url(${cdnURL}/fiesta_cloud.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: '$move_clouds2 20s infinite',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  '@keyframes move_clouds2': {
    from: {
      left: 0
    },
    '50%': {
      left: 100
    },
    to: {
      left: 0
    }
  },
}));

const Page = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.schedContainer}>
        <div className={classes.spacer} />
        <div className={classes.schedBalloon} />
        <div className={classes.schedSun} />
        <div className={classes.schedCloud} />
        <Grid container direction="row" spacing={3} alignItems="center">
          <Grid item xs={6} md={4}>
            <Typography variant="h2">Schedule of Events</Typography>
            <div className={classes.spacer} />
            <Button variant="contained" color="primary" disableElevation onClick={() => router.push('/calendar')}>
              Read More
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <div style={{ height: '35vw' }} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Page;
