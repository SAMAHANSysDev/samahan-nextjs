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
  contentContainer: {
    color: '#01253C',
    width: '80%',
    margin: 'auto',
    marginBottom: 80
  },
  tayoLogo: {
    width: '100%'
  }
}));

const Page = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.contentContainer}>
        <Grid container direction="row" spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={`${cdnURL}/fiesta_tayo_logo_2.png`} className={classes.tayoLogo} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h3">Tayô, Táyo</Typography>
            <div className={classes.spacer} />
            <Typography variant="body1" component="p">Tayô [verb]: to stand up; to rise. </Typography>
            <Typography variant="body1" component="p">Táyo [pronoun] we; us; inclusive of the people spoken to.</Typography>
            <div className={classes.spacer} />
            <Typography variant="body1" component="p">The brand, "Tayô, Táyo! Igniting the Marian Spirit: Our Binding Force of Hope, Resilience, and Togetherness despite Distance and Uncertainty," expresses a call for us to stand firm together in spite of the hardships the world is currently experiencing. The SAMAHAN, ...</Typography>
            <div className={classes.spacer} />
            <Button variant="contained" color="primary" disableElevation onClick={() => router.push('/fiesta/about')}>
              Read More
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Page;
