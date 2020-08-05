import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import dynamic from 'next/dynamic';

const About = dynamic(() => import('components/fiesta/about'));
const FAQ = dynamic(() => import('components/fiesta/faq'));
const Raffle = dynamic(() => import('components/fiesta/raffle'));
const Schedule = dynamic(() => import('components/fiesta/schedule'));

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: 30
  },
  header: {
    width: '100%',
    height: 700,
    backgroundImage: `url(${cdnURL}/fiesta_main_header.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}));

const Page = () => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <>
      <div className={classes.header} />
      <About />
      <FAQ />
      <div style={{ height: 50 }} />
      <Schedule />
      <div style={{ height: 50 }} />
      <Raffle />
    </>
  );
};

export default Page;
