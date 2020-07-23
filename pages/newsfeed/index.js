import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

export default Page;