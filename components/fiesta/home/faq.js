import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: 30
  },
  tayoLogo: {
    width: '100%',
  },
  desktopLogo: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  mobileLogo: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    marginBottom: 100
  },
  faqsContainer: {
    position: 'relative',
    color: '#01253C',
    backgroundImage: `url(${cdnURL}/fiesta_faq_bg.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: 100,
    paddingBottom: 100
  },
  faqsCloud1: {
    position: 'absolute',
    top: '-4vw',
    right: 0,
    width: '36vw',
    height: '12vw',
    backgroundImage: `url(${cdnURL}/fiesta_cloud.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: '$move_clouds1 10s infinite',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  '@keyframes move_clouds1': {
    from: {
      right: 0
    },
    '50%': {
      right: 100
    },
    to: {
      right: 0
    }
  },
  faqsCloud2: {
    position: 'absolute',
    top: '-2vw',
    left: 0,
    width: '18vw',
    height: '6vw',
    backgroundImage: `url(${cdnURL}/fiesta_cloud.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: '$move_clouds2 20s infinite',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  '@keyframes move_clouds2': {
    from: {
      left: 0
    },
    '50%': {
      left: 100
    },
    to: {
      left: 0
    }
  },
  faqBalloon: {
    backgroundImage: `url("${cdnURL}/hot-air-balloon-1.png")`,
    backgroundRepeat: 'no-repeat',
    width: '10vw',
    height: '14vw',
    backgroundSize: 'contain',
    position: 'absolute',
    animation: '$balloonoscil 4s infinite',
    top: 0,
    right: 200,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  '@keyframes balloonoscil': {
    from: {
      translate: '0 0',
      transform: 'rotate(0deg)',
      animationTimingFunction: 'cubic-bezier(0.1, 0.3, 0.3, 1)'
    },
    '25%': {
      translate: '10px 0',
      transform: 'rotate(10deg)',
      animationTimingFunction: 'cubic-bezier(0.7, 0.0, 0.9, 0.7)'
    },
    '50%': {
      translate: '0 0',
      transform: 'rotate(0deg)',
      animationTimingFunction: 'cubic-bezier(0.1, 0.3, 0.3, 1)'
    },
    '75%': {
      translate: '-10px 0',
      transform: 'rotate(-10deg)',
      animationTimingFunction: 'cubic-bezier(0.7, 0.0, 0.9, 0.7)'
    },
    to: {
      translate: '0 0',
      transform: 'rotate(0deg)',
    }
  },
  faqRocket: {
    backgroundImage: `url("${cdnURL}/fiesta_rocket.png")`,
    backgroundRepeat: 'no-repeat',
    width: '10vw',
    height: '8vw',
    backgroundSize: 'contain',
    position: 'absolute',
    animation: '$rocketoscill 2s infinite',
    top: '-3vw',
    left: '30vw',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  '@keyframes rocketoscill': {
    from: {
      translate: '0 0',
      transform: 'rotate(0deg)',
      animationTimingFunction: 'cubic-bezier(0.1, 0.3, 0.3, 1)'
    },
    '25%': {
      translate: '10px 0',
      transform: 'rotate(5deg)',
      animationTimingFunction: 'cubic-bezier(0.7, 0.0, 0.9, 0.7)'
    },
    '50%': {
      translate: '0 0',
      transform: 'rotate(0deg)',
      animationTimingFunction: 'cubic-bezier(0.1, 0.3, 0.3, 1)'
    },
    '75%': {
      translate: '-10px 0',
      transform: 'rotate(-5deg)',
      animationTimingFunction: 'cubic-bezier(0.7, 0.0, 0.9, 0.7)'
    },
    to: {
      translate: '0 0',
      transform: 'rotate(0deg)',
    }
  }
}));

const Page = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.faqsContainer}>
        <div className={classes.faqsCloud1} />
        <div className={classes.faqsCloud2} />
        <div className={classes.faqBalloon} />
        <div className={classes.faqRocket} />
        <div className={classes.mobileLogo}>
          <img src={`${cdnURL}/fiesta_faq_logo_2.png`} className={classes.tayoLogo} />
        </div>
        <Typography variant="h2" component="h2">72nd Ateneo Fiesta FAQs</Typography>
        <div className={classes.spacer} />
        <Grid container direction="row" spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h4" component="h3">When is the online fiesta?</Typography>
            <Typography variant="body1" component="p">The fiesta will begin on August 12 and will end on August 14.</Typography>
            <div className={classes.spacer} />
            <Typography variant="h4" component="h3">When will the fiesta program begin?</Typography>
            <Typography variant="body1" component="p">The first day of the fiesta will be on August 12, beginning the traditional Fiesta Mass and Opening Ceremony at 11 AM. There will be events throughout the day that will take place on the official SAMAHAN and AdDU social media accounts.</Typography>
            <div className={classes.spacer} />
            <Typography variant="h4" component="h3">How will I be able to view and/or participate in the fiesta?</Typography>
            <Typography variant="body1" component="p">There will be a livestream that will be broadcasted on Facebook Live via the official SAMAHAN and AdDU pages.</Typography>
            <div className={classes.spacer} />
            <Typography variant="h4" component="h3">Where can I view the entries of the contests?</Typography>
            <Typography variant="body1" component="p">Entries for certain events will be premiered via Facebook Live while other entries will be posted on the official SAMAHAN social media accounts.</Typography>
            <div className={classes.spacer} />
            <Typography variant="h4" component="h3">What are the events for this fiesta and what is the schedule?</Typography>
            <Typography variant="body1" component="p">There will be publication materials released soon with the official events and schedule for each day. </Typography>
            <div className={classes.spacer} />
          </Grid>
          <Grid item xs={12} md={5} className={classes.desktopLogo}>
            <img src={`${cdnURL}/fiesta_faq_logo_2.png`} className={classes.tayoLogo} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Page;
