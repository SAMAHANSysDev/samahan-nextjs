import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { useRouter } from 'next/router';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({

}));

const List = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={6} alignItems="center">
      <Grid item md>
        <Typography variant="h5" style={{ lineHeight: '1.5em', fontFamily: 'Open Sans', fontWeight: 300 }}>
          Need some help? Go to
        </Typography>
        <Typography variant="h1" style={{ lineHeight: '0.8em', fontWeight: 700 }}>
          SAMAHAN
        </Typography>
        <Typography variant="h1" style={{ lineHeight: '0.8em', fontWeight: 700 }}>
          HELP PORTAL
        </Typography><br />
        <Button variant="contained" color="primary" disableElevation onClick={() => router.push('/samahan-help-portal')}>
          Learn More
        </Button>
      </Grid>
      <Grid item md>
        <center>
          <img src={`${cdnURL}/EX9n9N3UYAAOt62.jpg`} style={{ width: '100%' }} />
        </center>
      </Grid>
    </Grid>
  );
};

export default List;
