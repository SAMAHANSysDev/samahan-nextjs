import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WP from 'utils/wordpress';
import CardActionArea from "@material-ui/core/CardActionArea";

import dynamic from 'next/dynamic';
const Item = dynamic(() => import('components/home/newsfeed-item'));

import Button from 'components/Button';

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
    width: '100%',
    paddingTop: 100,
    paddingBottom: 100,
    backgroundImage: 'linear-gradient(to right, #1637BC, #2D8AEA)',
    color: theme.palette.secondary.main
  },
  bannerContainer: {
    minHeight: '40vh',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
    paddingLeft: 'clamp(50px, 10vw, 100px)',
    paddingRight: 'clamp(50px, 10vw, 100px)',
    color: 'white'
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
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    margin: theme.spacing(2)
  }
}));

const Page = ({ orders }) => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <Grid container direction="column" spacing={3} alignItems="center" justify="center" className={classes.bannerContainer}>
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant="h2" style={{ lineHeight: '0.8em' }}>
            ALL EXECUTIVE ORDERS
          </Typography>
        </Grid>
      </Grid>
      <div style={{ height: 50 }} />
      {/* Insert header here! */}
      <div className={classes.contentContainer} style={{ marginBottom: 100, paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Grid container direction="column" spacing={3} alignItems="stretch">
          {orders.map((order, i) => {
            // Render one Item component for each one.
            return (
              <Grid item style={{ backgroundColor: i % 2 === 1 ? 'rgb(242, 242, 242)' : 'white', padding: 0 }} key={order.id}>
                <CardActionArea onClick={() => window.open(order.acf.document_file.url, '_blank')} style={{ borderRadius: 20 }}>
                  <Typography variant="h5" className={classes.link}>{order.title.rendered}</Typography>
                </CardActionArea>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    const res = await WP.executiveOrders().perPage(100);
    if (res) { 
      return { props: { orders: res }, revalidate: 10 };
    } else {
      return { props: { orders: [] }, revalidate: 10 };
    }
  } catch (err) {
    return { props: { orders: [] }, revalidate: 10 };
  }
}

export default Page;