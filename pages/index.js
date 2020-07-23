import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import WP from '../utils/wordpress';
import Head from 'next/head';

import Banner from '../components/home/banner';
import Help from '../components/home/help';
import NewsFeed from '../components/home/newsfeed';
import Projects from '../components/home/projects';
import SocialMedia from '../components/home/social-media';

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

const List = ({ posts }) => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const bannerImage = "https://samahan-cdn.snry.xyz/img-corousel-1.jpg";

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

        <NewsFeed posts={posts} />

        <div className={classes.spacer}></div>
        
        <SocialMedia />
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    const res = await WP.posts();
    if (res) { 
      return { props: { posts: res } };
    } else {
      return { props: { posts: [] } };
    }
  } catch (err) {
    return { props: { posts: [] } };
  }
}

export default List;
