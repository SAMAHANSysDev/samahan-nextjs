import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WP from '../../utils/wordpress';
import Item from '../../components/home/newsfeed-item';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  rootContainer: {
    width: '100%',
    margin: 0
  },
  footerContainer: {
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
    marginLeft: '20vw',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 100
    },
  },
  pictureContainer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

const Page = ({ posts }) => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <div style={{ height: 100 }} />
      <div className={classes.contentContainer}>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(30px + 2vw)' }}>
          SAMAHAN NEWSFEED
        </Typography>
        <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(10px + 0.8vw)' }}>
          News and Stories of and for the Student Body
        </Typography>
      </div>
      <div style={{ height: 50 }} />
      {/* Insert header here! */}
      <div className={classes.contentContainer} style={{ marginBottom: 100 }}>
        <Grid container direction="row" spacing={3} alignItems="stretch">
          {posts.map((post) => {
            // Render one Item component for each one.
            return <Item key={post.id} item={post} />;
          })}
        </Grid>
      </div>
      <div className={classes.footerContainer}>
        <Grid container direction="row" alignItems="center">
          <Grid item sm={6}>
            <div className={classes.checkOutContainer}>
              <Typography variant="h1" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(20px + 2vw)' }}>
                Check our
              </Typography>
              <Typography variant="h1" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(20px + 2vw)' }}>
                latest release
              </Typography>
              <Button variant="contained" color="secondary"
                style={{ marginTop: 20 }}
                onClick={() => window.open('https://issuu.com/addusamahan/docs/samahan_newfeed_june_2020?fbclid=IwAR3k9q6PALD3OcWebsjsBleo_nscPnSM3i0A0RY_81hW31Mht20bRI_Y-Dg', '_blank')}
              >Click here</Button>
            </div>
          </Grid>
          <Grid item sm={6} className={classes.pictureContainer}>
            <img src="https://samahan-cdn.snry.xyz/newsfeed.png" style={{ width: '50%' }} />
          </Grid>
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