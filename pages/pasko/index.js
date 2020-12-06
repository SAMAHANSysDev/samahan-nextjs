import React from "react";
import { useRouter } from 'next/router';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import dynamic from 'next/dynamic';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Snowfall = dynamic(() => import('react-snowfall'), { ssr: false });

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  
  rootContainer: {
    width: '100%',
    height: 'auto',
    overflowX: 'hidden',
  },
  bannerContainer: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '90vh',
    [theme.breakpoints.up('sm')]: {
      backgroundImage: 'url("/assets/banner_ribbon.png")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
    },
    backgroundImage: 'url("/assets/christmas-tree-2.gif")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  rootContentContainer: {
    backgroundColor: '#002D26',
    backgroundImage: 'url("/assets/bgstars.png")',
  },
  contentContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(12),
      paddingRight: theme.spacing(12),
    },
  },
  bannerLeft: {
    background: 'url("/assets/christmas-tree.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'right center',
    width: '100%',
    height: '85vh',
  },
  paskoHeader: {
    fontFamily: 'Gaegu',
    color: 'white',
    textShadow: '2px 2px 8px #000000'
  },
  paskoContent: {
    fontWeight: 100,
    color: 'white',
    fontSize: '1.2rem',
  },
  eventsHeader: {
    fontFamily: 'Gaegu',
    color: 'white',
    fontSize: '5rem',
    textShadow: '2px 2px 8px #000000'
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.rootContainer}>
      <Snowfall />
      <div className={classes.bannerContainer}>
        <Hidden xsDown>
          <Grid container direction="row" alignItems="center" style={{ height: '80%', paddingTop: 20 }}>
            <Grid item sm={7} md={6} component="div" className={classes.bannerLeft} />
          </Grid>
        </Hidden>
      </div>
      <div className={classes.rootContentContainer}>
        <div className={classes.contentContainer}>
          <Grid container direction="row" alignItems="center" justify="center">
            <Grid item xs={12} md={6} component="div">
              <center>
                <img src="/assets/kids-group.png" width="80%" />
              </center>
            </Grid>
            <Grid item xs={12} md={6} component="div">
              <Typography variant="h2" className={classes.paskoHeader}>Linggo ng Pasko 2020</Typography>
              <Typography variant="body1" className={classes.paskoContent} style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}>
                When the pandemic began, different local businesses sprouted because a lot of people lost their jobs. In the hopes of helping these start-up businesses have a platform to promote their products, SAMAHAN initiated the Linggo ng Pasko 2020 which also aim to help the Amihan sa Dahican Community with its proceeds.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.contentContainer}>
          <Grid container direction="row" alignItems="center" justify="center" wrap="nowrap">
            <Grid item xs component="div">
              <img src="/assets/PAROL_1.png" width="100" style={{ float: 'right' }} />
            </Grid>
            <Grid item>
              <Typography variant="h2" className={classes.eventsHeader}>Events</Typography>
            </Grid>
            <Grid item xs component="div">
              <img src="/assets/PAROL_3.png" width="100" />
            </Grid>
          </Grid>
        </div>

        <div className={classes.contentContainer} style={{ paddingTop: 0 }}>
          <Grid container direction="row" alignItems="center" justify="center">
            <Grid item xs={12} md={6} component="div">
              <Typography variant="h2" className={classes.paskoHeader}>Linggo ng Pasko Raffle Draw</Typography>
              <Typography variant="body1" className={classes.paskoContent}>
                in partnership with AdDU Local Businesses
              </Typography>
              <Button variant="contained" size="large" style={{ marginTop: theme.spacing(2) }} onClick={handleClickOpen}>Mechanics</Button><br/>
              <Button variant="contained" size="large" style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }} onClick={() => router.push('/pasko/partners')}>Business Partners</Button>
            </Grid>
            <Grid item xs={12} md={6} component="div">
              <center>
                <img src="/assets/ticket.gif" width="80%" />
              </center>
            </Grid>
          </Grid>
        </div>

        <div className={classes.contentContainer}>
          <Grid container direction="row" alignItems="center" justify="center">
            <Hidden mdUp>
              <Grid item xs={12} md={6} component="div">
                <Typography variant="h2" className={classes.paskoHeader}>Short Film Festival</Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={6} component="div">
              <center>
                <img src="/assets/snowman.gif" width="80%" />
              </center>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6} component="div">
                <Typography variant="h2" className={classes.paskoHeader}>Short Film Festival</Typography>
              </Grid>
            </Hidden>
          </Grid>
        </div>

        <div className={classes.contentContainer}>
          <Grid container direction="row" alignItems="center" justify="center">
            <Grid item xs={12} md={6} component="div">
              <Typography variant="h2" className={classes.paskoHeader}>Class Virtual Caroling PasKontest</Typography>
            </Grid>
            <Grid item xs={12} md={6} component="div">
              <center>
                <img src="/assets/caroling.gif" width="80%" />
              </center>
            </Grid>
          </Grid>
        </div>

        <div className={classes.contentContainer}>
          <Grid container direction="row" alignItems="center" justify="center">
            <Hidden mdUp>
              <Grid item xs={12} md={6} component="div">
                <Typography variant="h2" className={classes.paskoHeader}>Linggo ng Pasko Culmination and University Christmas Celebration</Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={6} component="div">
              <img src="/assets/sleigh_with_noise.png" width="60%" />
              <img src="/assets/santa.gif" width="20%" />
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6} component="div">
                <Typography variant="h2" className={classes.paskoHeader}>Linggo ng Pasko Culmination and University Christmas Celebration</Typography>
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Mechanics</DialogTitle>
        <DialogContent>
          <Typography variant="body1" component="div">
            <ol>
              <li>Open to all Ateneo de Davao University community members (students, employees, faculty and staff).</li>
              <li>First, go to samahan.addu.edu.ph and check out the partner AdDU local businesses then choose which shop you prefer to earn tickets from.</li>
              <li>For every Php 100 single transaction, the participant may avail a ticket (worth Php 5) to the corresponding shop.</li>
              <li>The receipt of the transactions must be submitted and redeemed at https://bit.ly/LNP2020TicketRedemption.</li>
              <li>The final draw date of winners will be on December 18, 2020.</li>
            </ol>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div style={{ height: theme.spacing(12), backgroundColor: '#002D26' }} />
    </div>
  );
};

export default Page;
