import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import dynamic from 'next/dynamic';

const About = dynamic(() => import('components/fiesta/home/about'));
const FAQ = dynamic(() => import('components/fiesta/home/faq'));
const Raffle = dynamic(() => import('components/fiesta/home/raffle'));
const Schedule = dynamic(() => import('components/fiesta/home/schedule'));

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: 30
  },
  header: {
    width: '100%',
    height: '40vw',
    backgroundImage: `url(${cdnURL}/fiesta_main_header.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  mobileHeader: {
    marginTop: 100,
    marginBottom: 100,
    width: '100%',
    height: '120vw',
    backgroundImage: `url(${cdnURL}/fiesta_banner_mobile.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  }
}));

const Page = () => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <>
      <div className={classes.header} />
      <div className={classes.mobileHeader} />
      <About />
      <FAQ />
      <div style={{ height: '3vw' }} />
      <Schedule />
      <div style={{ height: '3vw' }} />
      <Raffle />
    </>
  );
};

export default Page;
