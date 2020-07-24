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
            <Typography variant="h4" className={classes.contentHeader}>Templates</Typography>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open('http://samahan.addu.edu.ph/wp-content/uploads/2020/04/Request-for-Equipment-.docx', '_blank')}
            >
              Request for Equipment
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open('http://samahan.addu.edu.ph/wp-content/uploads/2020/04/Request-for-Entry.docx', '_blank')}
            >
              Request for Entry of Outsiders
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open('http://samahan.addu.edu.ph/wp-content/uploads/2020/04/Request-for-LED.docx', '_blank')}
            >
              Request for LED
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open('http://samahan.addu.edu.ph/wp-content/uploads/2020/04/Request-for-LFD.docx', '_blank')}
            >
              Request for LFD
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open('http://samahan.addu.edu.ph/wp-content/uploads/2020/04/Request-for-Stilts.docx', '_blank')}
            >
              Request for Stilts
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open('http://samahan.addu.edu.ph/wp-content/uploads/2020/04/Requests-for-Parents-Consents.docx', '_blank')}
            >
              Request for Parent's Consents
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open('http://samahan.addu.edu.ph/wp-content/uploads/2020/04/Request-for-Ingress.docx', '_blank')}
            >
              Request for Ingress
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open('http://samahan.addu.edu.ph/wp-content/uploads/2020/04/Request-for-Overtime.docx', '_blank')}
            >
              Request for Overtime
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SaveIcon />}
              disableElevation fullWidth style={{ marginTop: 20 }}
              onClick={() => window.open('http://samahan.addu.edu.ph/wp-content/uploads/2020/04/Request-for-Pink-Slips.docx', '_blank')}
            >
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
