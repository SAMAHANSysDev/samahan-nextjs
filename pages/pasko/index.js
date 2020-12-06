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

import { Parallax, Background } from 'react-parallax';

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
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  backgroundContainer: {
    backgroundColor: '#002D26',
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
    fontSize: 'clamp(2rem, -0.875rem + 9vw, 4rem)',
    textShadow: '2px 2px 8px #000000'
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [openPrizes, setOpenPrizes] = React.useState(false);

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenPrizes = () => {
    setOpenPrizes(true);
  };

  const handleClosePrizes = () => {
    setOpenPrizes(false);
  };

  return (
    <div className={classes.rootContainer}>
      <Parallax strength={1500}>
        <Snowfall snowflakeCount={500} />
        <Background className={classes.backgroundContainer}>
          <img src="/assets/bgstars.png" />
          <img src="/assets/bgstars.png" />
          <img src="/assets/bgstars.png" />
          <img src="/assets/bgstars.png" />
          <img src="/assets/bgstars.png" />
          <img src="/assets/bgstars.png" />
          <img src="/assets/bgstars.png" />
          <img src="/assets/bgstars.png" />
          <img src="/assets/bgstars.png" />
          <img src="/assets/bgstars.png" />
        </Background>
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
                <Typography variant="h2" className={classes.eventsHeader}>About the Beneficiary</Typography>
              </Grid>
              <Grid item xs component="div">
                <img src="/assets/PAROL_3.png" width="100" />
              </Grid>
            </Grid>
          </div>

          <div className={classes.contentContainer}>
            <Grid container direction="row" alignItems="center" justify="center">
              <Grid item xs={12} md={6} component="div">
                <Typography variant="h2" className={classes.paskoHeader}>Amihan sa Dahican</Typography>
                <Typography variant="body1" className={classes.paskoContent} style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}>
                  Amihan sa Dahican operates on a small portion of Dahican Beach. They offer small services and facilities to support 40 Amihan youth in grade school to college and to promote turtle conservation and its sanctuary. Given that tourism and travelling  being restricted, their main source of income was adversely affected.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} component="div">
                <center>
                  <img src="/assets/dahican-1.png" width="80%" />
                </center>
              </Grid>
            </Grid>
          </div>

          <div className={classes.contentContainer}>
            <Grid container direction="row" alignItems="center" justify="center">
              <Grid item xs={12} md={6} component="div">
                <center>
                  <img src="/assets/dahican-2.png" width="80%" />
                </center>
              </Grid>
              <Grid item xs={12} md={6} component="div">
                <Typography variant="body1" className={classes.paskoContent} style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}>
                  With the proceeds from Linggo ng Pasko 2020, SAMAHAN aims to provide school supplies to support the continuing education of the youth in their community.
                </Typography>
                <Typography variant="body1" className={classes.paskoContent} style={{ marginBottom: theme.spacing(4) }}>
                  To know more about Amihan sa Dahican, you may visit their Official Facebook Page: <a href="https://facebook.com/AmihanSaDahicanTeamOfficial" target="_blank"><b>@AmihanSaDahicanTeamOfficial</b> / <b>@amihansadahicanofficial</b></a>
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
                <Grid container spacing={2}>
                  <Grid item>
                    <Button variant="contained" size="large" style={{ marginTop: theme.spacing(2) }} onClick={handleClickOpen}>Mechanics</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" size="large" style={{ marginTop: theme.spacing(2) }} onClick={handleClickOpenPrizes}>Prizes</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" size="large" style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }} onClick={() => router.push('/pasko/partners')}>Business Partners</Button>
                  </Grid>
                </Grid>
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
                <li>First, check out the partner AdDU local businesses on the SAMAHAN social media accounts then choose which shop you prefer to earn tickets from. You may also check out samahan.addu.edu.ph, starting December 7, 2020 for the partner shops profile.</li>
                <li>For every Php 100 single transaction, the participant may avail a ticket (worth Php 5) to the corresponding shop.</li>
                <li>The receipt of the transactions must be submitted and redeemed at <a href="https://bit.ly/LNP2020_TicketRedemption">https://bit.ly/LNP2020_TicketRedemption</a></li>
                <li>Winners of the Mini Raffle Draws on December 14-17 will be announced through SAMAHAN&#39;s social media accounts while the Grand Raffle Draw will be announced live on December 18, 2020 at the Ateneo de Davao Official Facebook Page. Follow @addusamahan on Twitter and Facebook for updates!</li>
              </ol>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          fullScreen={fullScreen}
          open={openPrizes}
          onClose={handleClosePrizes}
        >
          <DialogTitle>Shop Local and Win</DialogTitle>
          <DialogContent>
            <Typography variant="body1" component="div">
              <p>Major Prizes</p>
              <ul>
                <li>1st - Laptop</li>
                <li>2nd - Microphone and Webcam</li>
                <li>3rd - External hard drive</li>
                <li>
                  Other special prizes
                  <ul>
                    <li>Laptop stand</li>
                    <li>AdDU Tumbler</li>
                  </ul>
                </li>
              </ul>
              <p>And get a chance to win daily prizes on December 14-17, 2020!</p>
              <p>Minor Prizes</p>
              <ul>
                <li>There will be three (3) daily winners of gift certificates from partner shops and Gcash/load</li>
              </ul>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePrizes} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <div style={{ height: theme.spacing(12), backgroundColor: '#002D26' }} />
      </Parallax>
    </div>
  );
};

export default Page;
