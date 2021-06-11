import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
  const theme = useTheme();

  return (
    <Grid container direction="row" spacing={6} alignItems="center">
      <Grid item md>
        <Typography variant="h3" color="secondary" style={{ lineHeight: '0.8em', fontWeight: 400 }}>
          About
        </Typography>
        <Typography variant="h1" color="secondary" style={{ lineHeight: '0.8em', fontWeight: 700, marginBottom: '4rem' }}>
          SAMAHAN
        </Typography>
        <Button variant="contained" color="secondary" disableElevation onClick={() => router.push('/samahan')}>
          Learn More
        </Button>
      </Grid>
      <Grid item md>
        <center>
          <img
            src={`${cdnURL}/21-22/samahan asset.png`}
            style={{
              width: '100%',
            }} 
          />
        </center>
      </Grid>
    </Grid>
  );
};

export default List;
