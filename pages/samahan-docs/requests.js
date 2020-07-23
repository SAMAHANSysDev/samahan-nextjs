import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Banner from '../../components/samahan-docs/banner';
import SaveIcon from '@material-ui/icons/Save';
import NavButtons from '../../components/samahan-docs/nav-buttons';
import Instructions from '../../components/samahan-docs/requests-ins';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    width: '80%',
    margin: 'auto'
  },
  contentContainer: {
    width: '90%',
    margin: 'auto'
  },
  contentHeader: {
    fontFamily: 'Montserrat',
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <div style={{ height: 100 }} />

      <Banner />

      <div style={{ height: 100 }}></div>
      <div style={{ margin: 'auto', width: '80%' }}>
        {/* Buttons for other docs */}
        <NavButtons />
        <div style={{ height: 100 }}></div>

        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item sm={4}>
            {/* Templates */}
            <Typography variant="h4" className={classes.contentHeader}>Templates</Typography>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} disableElevation fullWidth style={{ marginTop: 20 }}>
              Request for Equipment
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} disableElevation fullWidth style={{ marginTop: 20 }}>
              Request for Entry of Outsiders
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} disableElevation fullWidth style={{ marginTop: 20 }}>
              Request for LED
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} disableElevation fullWidth style={{ marginTop: 20 }}>
              Request for LFD
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} disableElevation fullWidth style={{ marginTop: 20 }}>
              Request for Stilts
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} disableElevation fullWidth style={{ marginTop: 20 }}>
              Request for Parent's Consents
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} disableElevation fullWidth style={{ marginTop: 20 }}>
              Request for Ingress
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} disableElevation fullWidth style={{ marginTop: 20 }}>
              Request for Overtime
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} disableElevation fullWidth style={{ marginTop: 20 }}>
              Request for Pink Slips
            </Button>
          </Grid>
          <Grid item sm={8}>
            {/* Instructions */}
            <Typography variant="h4" className={classes.contentHeader}>Instructions</Typography>
            <div style={{ height: 20 }}></div>
            <Instructions />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;
