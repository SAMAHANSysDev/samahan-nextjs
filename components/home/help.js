import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { useRouter } from 'next/router';

import Typography from '@material-ui/core/Typography';

import Button from 'components/Button';

import Grid from '@material-ui/core/Grid';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({

}));

const List = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={6} alignItems="center" justify="center">
      <Grid item md>
        <center>
          <img
            src={`${cdnURL}/21-22/Retro Human-1.png`}
            style={{
              width: '100%',
              WebkitTransform: 'scaleX(-1)',
              transform: 'scaleX(-1)',
            }} 
          />
        </center>
      </Grid>
      <Grid item md>
        <Typography variant="h1" color="primary" style={{ lineHeight: '0.8em', fontWeight: 700, marginBottom: '4rem' }}>
          Help Portal
        </Typography>
        <Grid container spacing={3}>
          <Grid item md>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h4">
                  Start-up Kit
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ fontStyle: 'italic' }}>
                  For Incoming First Year Students
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '1.5rem' }}>
                <Button variant="contained" color="primary" disableElevation onClick={() => router.push('/samahan-help-portal')}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h4">
                  FAQs
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ fontStyle: 'italic' }}>
                  Frequently Asked Questions
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '1.5rem' }}>
                <Button variant="contained" color="primary" disableElevation onClick={() => router.push('/samahan-help-portal')}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default List;
