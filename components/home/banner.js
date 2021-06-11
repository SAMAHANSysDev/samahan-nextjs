import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: '90vh',
    width: '100%',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
    paddingLeft: 'clamp(50px, 10vw, 100px)',
    paddingRight: 'clamp(50px, 10vw, 100px)'
  },
  bannerTextContainer: {
    position: 'relative',
    float: 'right',
    fontWeight: 20,
    color: theme.palette.secondary.main,
    zIndex: 3
  },
  bannerText: {
    textAlign: 'right',
    zIndex: 3,
    margin: 0,
    fontFamily: 'Open Sans',
    fontWeight: 300
  },
  bannerHeader: {
    textAlign: 'right',
    fontSize: '7.5vw',
    margin: 0
  },
}));

const List = () => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <div className={classes.bannerContainer}>
      <Grid container direction="column" justify="center" style={{ height: '80%', paddingTop: 20 }} spacing={4}>
        <Grid item>
          <CardMedia
            component="img"
            image="https://samahan.stdcdn.com/21-22/OTF-2_white.png"
            style={{ width: 'clamp(250px, 60vw, 60%)' }}
          />
        </Grid>
        <Grid item style={{ color: 'white', fontStyle: 'italic' }}>
          <Typography>The future is ours.</Typography>
          <Typography>We decide what is next for us.</Typography>
          <Typography>We no longer wait for the future;</Typography>
          <Typography>we own the future.</Typography>
        </Grid>
        <Grid item style={{ color: 'white' }}>
          <Grid container spacing={2}>
            <Grid item>
              <IconButton color="secondary" onClick={() => window.open('https://www.facebook.com/AdDUSAMAHAN/', '_blank').focus()}>
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="secondary" onClick={() => window.open('https://twitter.com/addusamahan/', '_blank').focus()}>
                <TwitterIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="secondary" onClick={() => window.open('https://instagram.com/samahan_ateneo/', '_blank').focus()}>
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
