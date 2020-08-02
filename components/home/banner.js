import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: '90vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundImage: `url("${cdnURL}/samahan-fiesta-banner.png")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'left bottom'
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
  bannerImageContainer: {
    position: 'relative',
    zIndex: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  bannerImage: {
    width: '65vw',
    position: 'absolute',
    width: '85vw',
    left: '-3vw',
    bottom: '-30.6vw'
  },
}));

const List = ({ bannerImage }) => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <div className={classes.bannerContainer}>
      <Grid container direction="row" alignItems="center" style={{ height: '80%', paddingTop: 20 }}>
        <Grid item sm={6} className={classes.bannerImageContainer}>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.bannerTextContainer}>
            <Typography variant="h5" className={classes.bannerText} style={{ lineHeight: '0.9em' }}>
              Welcome to
            </Typography>
            <Typography variant="h1" component="h2" className={classes.bannerHeader} style={{ lineHeight: '0.9em' }}>
              SAMAHAN
            </Typography>
            <Typography variant="h5" className={classes.bannerText} style={{ lineHeight: '0.9em' }}>
              The Official Student Government of
            </Typography>
            <Typography variant="h5" className={classes.bannerText} style={{ lineHeight: '0.9em' }}>
              Ateneo de Davao University
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
