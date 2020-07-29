import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import dynamic from 'next/dynamic';
import WP from 'utils/wordpress';
import sort from 'fast-sort';

const ClubsList = dynamic(() => import('components/cco/clubs'));
const CCOBanner = dynamic(() => import('components/cco/banner'));

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    width: '80%',
    margin: 'auto'
  },
  contentContainer: {
    width: '90%',
    margin: 'auto'
  },
  
  motionLogoContainer: {
    position: 'relative'
  },
  motionLogo: {
    position: 'absolute',
    left: 0,
    top: -300,
    width: 600,
    zIndex: -1
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  },
}));

const Page = ({ clubs }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <div style={{ height: 100 }} />

      <CCOBanner />
      
      <div style={{ height: 100 }} />
      
      <div className={classes.contentContainer}>
        <ClubsList list={clubs} />
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    let clubs = await WP.ccoClubs().perPage(100);
    sort(clubs).asc(x => x.acf.short_name);

    return { props: { clubs }, revalidate: 10 };
  } catch (err) {
    console.log(err)
    return { props: { clubs: [] }, revalidate: 10 };
  }
}

export default Page;
