import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Carousel } from 'react-responsive-carousel';

import { cdnURL } from 'utils/constants';

import dynamic from 'next/dynamic';
const Banner = dynamic(() => import('components/himig-bughaw/banner'));

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: 30
  },
  spacerDiv: {
    height: 100
  },
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  rootCalContainer: {
    position: 'relative',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    paddingTop: 30,
    paddingBottom: 30
  },
  calendarContainer: {
    display: 'flex',
    width: '80%',
    margin: 'auto',
    marginBottom: 0,
    justifyContent: 'center'
  },
  rootContainer: {
    width: '100%',
    marginBottom: 0,
  },
  footerMarginColor: {
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    height: 300,
    width: '100%',
    bottom: -300,
    left: 0
  },
  paper: {
    padding: '6px 16px',
    backgroundColor: theme.palette.secondary.main,
    color: '#000'
  },
  carouselImage: {
    width: 'auto',
    maxHeight: 400
  },
  carouselDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  carouselMobile: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
}));


const Page = ({ events: rawEvents }) => {
  // Get the data of the current list.
  const classes = useStyles();

  const PartnerCarousel = () => {
    return (
      <Carousel autoPlay={false} showThumbs={false} showArrows={true} className={classes.carousel}>
        { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((number) => {
          return (
            <div>
              <img key={number} src={`${cdnURL}/himig_${number}.jpg`} className={classes.carouselImage} />
            </div>
          );
        }) }
      </Carousel>
    )
  }

  return (
    <div className={classes.rootContainer}>
      {/* Insert header here! */}
      <div style={{ height: 100 }} />
      <Banner />
      <div style={{ width: '80%', margin: 'auto', paddingTop: 100 }}>
        <Grid container direction="row" spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" component="p">About Himig Bughaw</Typography>
              <div className={classes.spacer} />
              <Typography variant="body1" component="p">
                As we maximize different resources to <b>feature talents and creativity online</b>, we also make sure that these resources are put into use to <b>aid others who are in need of help</b>. This concert will be in partnership with the Arrupe Office of Social Formation (AOSF). 
              </Typography>
              <Typography variant="body1" component="p">
                All funds generated from the concert will directly go to the Foundation of Balay Pasilungan, Inc.
              </Typography>
              <div className={classes.spacer} />
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={`${cdnURL}/samahan_logo_colored.png`} style={{ width: '45%', marginRight: '5%' }} />
              <img src={`${cdnURL}/aosf_logo.png`} style={{ width: '45%', marginLeft: '5%' }} />
            </Grid>
          </Grid>
          <div className={classes.spacerDiv} />
          <Grid container direction="row" spacing={5} alignItems="center">
            <Grid item xs={12} md={5} className={classes.carouselDesktop}>
              <PartnerCarousel />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" component="p">About the Partner Community</Typography>
              <div className={classes.spacer} />
              <Typography variant="body1" component="p">
                The Balay Pasilungan of the Society of Mary-Marist Fathers and Brothers provides a <b>safe place</b> for young street boys who have no other place to run to when in distress. The foundation envisions a community where <b>underprivileged boys</b> will have a productive and wholesome adult lives hoping that they will have <b>better integration in the society</b>. 
              </Typography>
              <div className={classes.spacer} />
            </Grid>
            <Grid item xs={12} md={5} className={classes.carouselMobile}>
              <PartnerCarousel />
            </Grid>
          </Grid>
          <div className={classes.spacerDiv} />
          <Grid container direction="row" spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" component="p">Donation Guidelines</Typography>
              <div className={classes.spacer} />
              <Button variant="contained" size="large" color="primary" fullWidth disableElevation onClick={()=> window.open("https://tinyurl.com/HimigBughaw", "_blank")}>
                Click here and fill out the necessary details
              </Button>
              <div className={classes.spacer} />
              <Typography variant="h5">Online Donations Reference Numbers:</Typography>
              <Typography variant="body1" component="div">
                <ul>
                  <li><b>GCASH</b>: 0933260</li>
                  <li><b>BDO</b>: 933260</li>
                  <li><b>BPI</b>: 933260/SAMAHAN/SURNAME/FIRST</li>
                </ul>
              </Typography>
              <div className={classes.spacer} />
              <Typography variant="h5" component="p">For Online Donations:</Typography>
              <Typography variant="body1" component="p">Select "<b>Schools</b>" under the Biller Menu</Typography>
              <div className={classes.spacer} />
              <Typography variant="h5" component="p">Over-the-counter (Either Drive-thru or banks and other payment centers):</Typography>
              <Typography variant="body1" component="p">Just indicate <b>933260</b> in the reference number portion of the bills payment slip.</Typography>
              <div className={classes.spacer} />
              <Typography variant="body1" component="p">For inquiries regarding the online payments, you may call <b>221-2411</b> local <b>8258</b> or email <b>finance@addu.edu.ph</b>.</Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={`${cdnURL}/himig-bughaw-qr.png`} style={{ width: '100%' }} />
            </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;