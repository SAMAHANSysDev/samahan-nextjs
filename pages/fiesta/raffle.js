import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('components/fiesta/raffle/banner'));

import Typography from '@material-ui/core/Typography';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: 100,
    position: 'relative'
  },
  header: {
    width: '100%',
    height: '40vw',
    backgroundImage: `url(${cdnURL}/fiesta_main_header.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  contentContainer: {
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    margin: 'auto',
    color: '#01253C'
  },
  balloon: {
    backgroundImage: `url("${cdnURL}/hot-air-balloon-1.png")`,
    backgroundRepeat: 'no-repeat',
    width: '10vw',
    height: '14vw',
    backgroundSize: 'contain',
    position: 'absolute',
    animation: '$balloonoscil 4s infinite',
    top: '2vw',
    left: '-25%',
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
  cloud: {
    position: 'absolute',
    top: '-4vw',
    right: '-20%',
    width: '24vw',
    height: '8vw',
    backgroundImage: `url(${cdnURL}/fiesta_cloud.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: '$move_cloud 15s infinite',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  '@keyframes move_cloud': {
    from: {
      right: '-50%'
    },
    '50%': {
      right: '-40%'
    },
    to: {
      right: '-50%'
    }
  },
  rocket: {
    backgroundImage: `url("${cdnURL}/fiesta_rocket.png")`,
    backgroundRepeat: 'no-repeat',
    width: '10vw',
    height: '8vw',
    backgroundSize: 'contain',
    position: 'absolute',
    animation: '$rocketoscill 2s infinite',
    top: 0,
    left: '-25%',
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
  },
  sun: {
    backgroundImage: `url("${cdnURL}/fiesta_sun.png")`,
    backgroundRepeat: 'no-repeat',
    width: '12.6vw',
    height: '10vw',
    backgroundSize: 'contain',
    position: 'absolute',
    animation: '$move_sun 3s infinite',
    top: '-2vw',
    right: '-20%',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  '@keyframes move_sun': {
    from: {
      translate: '0 0',
      transform: 'rotate(0deg)',
    },
    to: {
      translate: '0 0',
      transform: 'rotate(360deg)',
    }
  },
}));

const Page = () => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <>
      <Banner />
      <div className={classes.contentContainer}>
        <div className={classes.spacer}>
          <div className={classes.balloon}></div>
        </div>
        <Typography variant="h3">FIESTA BINGO GO GO GO!</Typography>
        <Typography variant="body1" component="div">
          <ol>
            <li>Select 4 out of 9 challenges in the FIESTA BINGO template.</li>
            <li>Take a photo, video, screenshot, or any proof of accomplishment for the selected challenges.</li>
            <li>After accomplishing the chosen challenges, post your entry on Twitter. It may be in a form of thread or collage. </li>
            <li>Don’t forget to tag @addusamahan on Twitter and make sure to use the official hashtag #72ndAteneoFiesta #TayôTáyo2020.</li>
            <li>All entries must be posted on or before August 6, 2020 at 9PM. </li>
            <li>Winners will be drawn on August 7, 2020 and usernames will be posted in all SAMAHAN social media accounts.</li>
            <li>This is open to all bona fide Ateneo students for S.Y. 2020-2021.</li>
          </ol>
        </Typography>
        <div className={classes.spacer}>
          <div className={classes.cloud}></div>
        </div>
        <Typography variant="h3">#72ndAteneoFiesta RAMPAHAN</Typography>
        <Typography variant="body1" component="div">
          <ol>
            <li>Participants must wear their best 72nd Ateneo Fiesta outfit.</li>
            <li>Pose and snap a photo of you showing your best look and post it on Twitter. </li>
            <li>Don't forget to tag @addusamahan, and use the official hashtag #72ndAteneoFiesta #TayôTáyo2020.</li>
            <li>Deadline of submission of entries is on August 8, 2020 at 9PM.</li>
            <li>Chosen winners will be drawn on August 9, 2020 and usernames will be posted in all SAMAHAN social media accounts.</li>
            <li>This is open to all bona fide Ateneo students for S.Y. 2020-2021.</li>
          </ol>
        </Typography>
        <Typography variant="body1" component="p">
          Note: Posts that promote pornographic content and other depictions of nudity is strictly prohibited and will be subjected to an OSA-violation.
        </Typography>
        <div className={classes.spacer}>
          <div className={classes.rocket}></div>
        </div>
        <Typography variant="h3">WHOlaan: Fiesta Edition</Typography>
        <Typography variant="body1" component="div">
          <ol>
            <li>Create a meme showing who you would be during the Fiesta (e.g. cheerer, organizer, participant). The meme may be in any format (photo, video, Tiktok video, etc.).</li>
            <li>Post your entry on Twitter. Don’t forget to tag @addusamahan and use the official hashtag #72ndAteneoFiesta #TayôTáyo2020.</li>
            <li>Deadline of submission of entries is on August 11, 2020 at 9PM.</li>
            <li>Chosen winners will be drawn on August 12, 2020 and usernames will be posted in all SAMAHAN social media accounts.</li>
            <li>This is open to all bona fide Ateneo students for S.Y. 2020-2021. </li>
          </ol>
        </Typography>
        <div className={classes.spacer}>
          <div className={classes.sun}></div>
        </div>
        <Typography variant="h3">Grand Raffle Draw</Typography>
        <Typography variant="body1" component="div">
          <ol>
            <li>In order to qualify in the grand raffle draw, participants must join at least two (2) out of three (3) from the 72nd Ateneo Fiesta online games.</li>
            <li>The Grand Raffle Draw will be on August 13, 2020 at 6PM via Facebook live.</li>
          </ol>
        </Typography>
        <div style={{ height: 50 }} />
        <Typography variant="body2" component="p">
          (To claim the prizes, winners must send a message to SAMAHAN and present their contact information such as name and contact number.)
        </Typography>
        <div style={{ height: 50 }} />
        <Typography variant="h4" component="p" style={{ textAlign: 'center' }}>
          Support Local. Support Atenean Businesses.
        </Typography>
      </div>
    </>
  );
};

export default Page;
