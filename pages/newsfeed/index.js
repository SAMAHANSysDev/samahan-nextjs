import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WP from 'utils/wordpress';

import dynamic from 'next/dynamic';
const Item = dynamic(() => import('components/home/newsfeed-item'));

import Button from '@material-ui/core/Button';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  
  rootContainer: {
    width: '100%',
    margin: 0
  },
  footerContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  rootContainer: {
    width: '100%',
    marginBottom: 0
  },
  checkOutContainer: {
    marginLeft: '20vw'
  },
  pictureContainer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  footerMarginColor: {
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    height: 300,
    width: '100%',
    bottom: -300,
    left: 0
  }
}));

const Page = ({ posts, users }) => {
  // Get the data of the current list.
  const classes = useStyles();

  const getAuthor = (id) => {
    return users.find((user) => user.id === id);
  }

  return (
    <div className={classes.rootContainer}>
      <div style={{ height: 100 }} />
      <div className={classes.contentContainer}>
        <Typography variant="h2" component="h2" style={{ lineHeight: '0.8em' }}>
          SAMAHAN NEWSFEED
        </Typography>
        <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
          News and Stories of and for the Student Body
        </Typography>
      </div>
      <div style={{ height: 50 }} />
      {/* Insert header here! */}
      <div className={classes.contentContainer} style={{ marginBottom: 100 }}>
        <Grid container direction="row" spacing={3} alignItems="stretch">
          {posts.map((post) => {
            // Render one Item component for each one.
            return <Item key={post.id} item={post} author={getAuthor(post.author)} />;
          })}
        </Grid>
      </div>
      <div className={classes.footerContainer}>
        <Grid container direction="row" alignItems="center">
          <Grid item sm={6}>
            <div className={classes.checkOutContainer}>
              <Typography variant="h2" style={{ lineHeight: '0.8em'}}>
                Check our
              </Typography>
              <Typography variant="h2" style={{ lineHeight: '0.8em' }}>
                latest release
              </Typography>
              <Button variant="contained" color="secondary"
                style={{ marginTop: 20 }}
                onClick={() => window.open('https://issuu.com/addusamahan/docs/samahan_newfeed_june_2020', '_blank')}
              >
                Click here
              </Button>
            </div>
          </Grid>
          <Grid item sm={6} className={classes.pictureContainer}>
            <center>
              <img src={`${cdnURL}/newsfeed.png`} style={{ width: '50%' }} />
            </center>
          </Grid>
        </Grid>
        <div className={classes.footerMarginColor} />
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    const [res, users] = await Promise.all([
      WP.posts(),
      WP.users()
    ]);
    if (res) { 
      return { props: { posts: res, users }, revalidate: 10 };
    } else {
      return { props: { posts: [], users }, revalidate: 10 };
    }
  } catch (err) {
    return { props: { posts: [], users: [] }, revalidate: 10 };
  }
}

export default Page;