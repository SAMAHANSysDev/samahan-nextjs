import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import dynamic from 'next/dynamic';

const FAQs = dynamic(() => import('components/samahan-help-portal/faqs'));
const RedirectButtons = dynamic(() => import('components/samahan-help-portal/redirect-buttons'));

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Carousel } from 'react-responsive-carousel';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
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

      <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em' }}>
            SAMAHAN
          </Typography>
          <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em' }}>
            HELP PORTAL
          </Typography><br />
          <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
            Concerns, Questions & Queries
          </Typography>
          <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
            samahan.addu.edu.ph
          </Typography>
        </Grid>
        <Grid item sm>
          <img src={`${cdnURL}/Concerns-Flowchart-White.png`} style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <div style={{ height: 100 }}></div>

      <div style={{ margin: 'auto', width: '90%' }}>
        <RedirectButtons />

        <div style={{ height: 100 }}></div>

        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <FAQs />
          <Grid item sm>
            <Carousel autoPlay={false} showThumbs={false} showArrows={true}>
              <div>
                <img src={`${cdnURL}/Enroll-in-3-Steps-1.png`} />
              </div>
              <div>
                <img src={`${cdnURL}/Enroll-in-3-Steps-2.png`} />
              </div>
              <div>
                <img src={`${cdnURL}/Enroll-in-3-Steps-3.png`} />
              </div>
              <div>
                <img src={`${cdnURL}/Enroll-in-3-Steps-4.png`} />
              </div>
            </Carousel>
            <div style={{ height: 20 }} />
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="addusamahan"
              options={{height: 800, width: '100vw'}}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;
