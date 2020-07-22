import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import WP from '../utils/wordpress';

import Banner from '../components/home/banner';
import Help from '../components/home/help';
import NewsFeed from '../components/home/newsfeed';
import Projects from '../components/home/projects';
import SocialMedia from '../components/home/social-media';
import Head from 'next/head';

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
    margin: 0
  }
}));

const List = ({ posts }) => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const bannerImage = "https://samahan-cdn.snry.xyz/img-corousel-1.jpg";

  return (
    <div className={classes.rootContainer}>
      <Head>
        <title>Home - SAMAHAN</title>
        <meta name="description" content="The Official Student Government of Ateneo de Davao University" />
        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content="Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samahan.snry.xyz/" />
        <meta property="og:image" content={bannerImage} />
        <meta property="og:description" content="The Official Student Government of Ateneo de Davao University" />
      </Head>

      <Banner bannerImage={bannerImage} />
      <div className={classes.contentContainer}>
        <div className={classes.spacer}></div>
        
        <Projects />

        <div className={classes.spacer}></div>

        <Help />

        <div className={classes.spacer}></div>

        <NewsFeed posts={posts} />

        <div className={classes.spacer}></div>
        
        <SocialMedia />
      </div>
    </div>
  );
};

List.getInitialProps = async (ctx) => {
  try {
    const res = await WP.posts();
    if (res) { 
      return { posts: res };
    } else {
      return { posts: [] };
    }
  } catch (err) {
    console.log(err);
    return { posts: [] };
  }
}

export default List;
