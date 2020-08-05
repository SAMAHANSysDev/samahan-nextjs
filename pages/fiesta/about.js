import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import dynamic from 'next/dynamic';

import { cdnURL } from 'utils/constants';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: 30
  },
  header: {
    width: '100%',
    height: '40vw',
    backgroundImage: `url(${cdnURL}/fiesta_main_header.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  cd: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    right: '-15vw',
    width: '50vw',
    height: '50vw',
    backgroundImage: `url(${cdnURL}/fiesta_about_cd.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: '$move_cd 15s infinite linear',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  '@keyframes move_cd': {
    from: {
      translate: '0 0',
      transform: 'rotate(359deg)',
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
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ width: '80%', margin: 'auto', paddingTop: 100 }}>
        <Grid container direction="row" spacing={3} alignItems="center">
            <Grid item xs={12} md={6} style={{ minHeight: '55vw' }}>
              <Typography variant="h2" component="p">About Tayô, Táyo</Typography>
              <div className={classes.spacer} />
              <Typography variant="body1" component="p">
                This academic year 2020-2021, we are confronted with the unexpected occurrence of events that we have not prepared for. We are challenged to maintain the quality of service we promised to commit to the whole Ateneo Community.  As we continue to commemorate the traditional feast of the Lady of Assumption, this year's Ateneo Fiesta highlights its central theme in the Marian Spirit that speaks of our undying hope in the middle of this crisis.
              </Typography>
              <div className={classes.spacer} />
              <Typography variant="body1" component="p">
                <b>Tayô</b> [verb]: to stand up; to rise. 
              </Typography>
              <Typography variant="body1" component="p">
                <b>Táyo</b> [pronoun] we; us; inclusive of the people spoken to.
              </Typography>
              <div className={classes.spacer} />
              <Typography variant="body1" component="p">
                The brand, "Tayô, Táyo! Igniting the Marian Spirit: Our Binding Force of Hope, Resilience, and Togetherness despite Distance and Uncertainty," expresses a call for us to stand firm together in spite of the hardships the world is currently experiencing. The SAMAHAN, motivated by this theme, aims to highlight our stories of resiliency and hope, and share our strength to the people through the different events planned for the 72nd Ateneo Fiesta. Through these inspiring moments, we hope to reach the people and connect to them our heartfelt stories despite being physically distant from each other. Together, we are hopeful that this year's fiesta will not only be remembered because of the unique online set up but shall also be remembered as a purposeful event that transcends beyond our fears and inspires other people in this pandemic. This theme leaves a message that we may be in darkness right now, uncertain of what is ahead of us, but we will be lamps, and we light each other's paths until we can stand together.
              </Typography>
            </Grid>
        </Grid>
      </div>
      <div className={classes.cd} />
    </div>
  );
};

export default Page;
