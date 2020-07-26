import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import dynamic from 'next/dynamic';
const Banner = dynamic(() => import('components/samahan-docs/banner'));
const NavButtons = dynamic(() => import('components/samahan-docs/nav-buttons'));
const Instructions = dynamic(() => import('components/samahan-docs/concept-paper-ins'));

import { backendURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    width: '80%',
    margin: 'auto'
  },
  contentContainer: {
    width: '90%',
    margin: 'auto'
  },
  
  rootContainer: {
    width: '100%',
    marginBottom: 80
  },
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
            <Typography variant="h4">Templates</Typography>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open(`${backendURL}/wp-content/uploads/2020/04/Concept-Paper.docx`, '_blank')}
            >
              Concept Paper
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => {}}
              disabled
            >
              Financial Report
            </Button>
          </Grid>
          <Grid item sm={8}>
            {/* Instructions */}
            <Typography variant="h4">Instructions</Typography>
            <div style={{ height: 20 }}></div>
            <Instructions />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;
