import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import WP from '../../utils/wordpress';
import Item from '../../components/home/newsfeed-item';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  
  rootContainer: {
    width: '100%',
    margin: 0
  }
}));

const Page = ({ posts }) => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <Head>
        <title>Newsfeed - SAMAHAN</title>
        <meta name="description" content="News and Stories of and for the Student Body" />
        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content="Newsfeed" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samahan.snry.xyz/newsfeed" />
        <meta property="og:description" content="News and Stories of and for the Student Body" />
      </Head>
      {/* Insert header here! */}
      <div className={classes.contentContainer}>
        <Grid container direction="row" spacing={3} alignItems="stretch">
          {posts.map((post) => {
            // Render one Item component for each one.
            return <Item key={post.id} item={post} />;
          })}
        </Grid>
      </div>
    </div>
  );
};

Page.getInitialProps = async (ctx) => {
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

export default Page;