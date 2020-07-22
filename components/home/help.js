import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import { useRouter } from 'next/router';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Open\ Sans',
  },
}));

const List = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={6} alignItems="center">
      <Grid item md>
        <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(10px + 1vw)' }}>
          Need some help? Go to
        </Typography>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(30px + 4vw)' }}>
          SAMAHAN
        </Typography>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(30px + 4vw)' }}>
          HELP PORTAL
        </Typography><br />
        <Button variant="contained" color="primary" disableElevation onClick={() => router.push('/samahan-help-portal')}>
          Learn More
        </Button>
      </Grid>
      <Grid item md>
        <center>
          <img src="https://samahan-cdn.snry.xyz/EX9n9N3UYAAOt62.jpg" style={{ width: '100%' }} />
        </center>
      </Grid>
    </Grid>
  );
};

export default List;
