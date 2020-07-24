import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({

}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const router = useRouter();

  return (
    <Grid container direction="row" spacing={6} justify="center">
      <Grid item sm={4}>
        <Button variant="contained" color="primary" disableElevation fullWidth onClick={() => router.push('/samahan-docs')}>
          Reservations
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button variant="contained" color="primary" disableElevation fullWidth onClick={() => router.push('/samahan-docs/requests')}>
          Requests
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button variant="contained" color="primary" disableElevation fullWidth onClick={() => router.push('/samahan-docs/concept-paper')}>
          Concept Paper & Financial Reports
        </Button>
      </Grid>
    </Grid>
  );
};

export default Page;
