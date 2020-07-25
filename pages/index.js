import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('components/home/banner'));
const Help = dynamic(() => import('components/home/help'));
const NewsFeed = dynamic(() => import('components/home/newsfeed'));
const Projects = dynamic(() => import('components/home/projects'));
const SocialMedia = dynamic(() => import('components/home/social-media'));

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  spacer: {
    height: 100
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  }
}));

const List = () => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const bannerImage = `${cdnURL}/img-corousel-1.jpg`;

  return (
    <div className={classes.rootContainer}>
      <Head>
        <meta property="og:image" content={bannerImage} />
      </Head>

      <Banner bannerImage={bannerImage} />
      <div className={classes.contentContainer}>
        <div className={classes.spacer}></div>
        
        <Projects />

        <div className={classes.spacer}></div>

        <Help />

        <div className={classes.spacer}></div>

        <NewsFeed />

        <div className={classes.spacer}></div>
        
        <SocialMedia />
      </div>
    </div>
  );
};

export default List;
