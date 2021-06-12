import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import dynamic from 'next/dynamic';
import WP from 'utils/wordpress';
import { sort } from 'fast-sort';

const OfficersList = dynamic(() => import('components/cco/officers'));
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

const Page = ({ officers }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <div style={{ height: 100 }} />
      
      <CCOBanner />
      
      <div style={{ height: 100 }} />
      
      <div className={classes.contentContainer}>
        <OfficersList list={officers} />
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    let officers = await WP.ccoOfficers().perPage(100);
    officers = sort(officers).asc(x => parseInt(x.acf.order));

    return { props: { officers }, revalidate: 10 };
  } catch (err) {
    console.log(err)
    return { props: { officers: [] }, revalidate: 10 };
  }
}

export default Page;
