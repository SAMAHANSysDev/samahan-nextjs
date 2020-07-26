import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: '90vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    paddingLeft: 50,
    paddingRight: 50
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
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: theme.palette.primary.main,
    margin: 0
  },
  bannerImageContainer: {
    zIndex: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  bannerImage: {
    maxHeight: '75vh',
    width: '65vw',
    background: theme.palette.primary.main,
    opacity: 0.4,
    mixBlendMode: 'screen'
  },
  bannerNewImage: {
    mixBlendMode: 'screen',
    WebkitFilter: "grayscale(100%) sepia(100%) hue-rotate(170deg) saturate(4) contrast(200%)",
    filter: "grayscale(100%) sepia(100%) hue-rotate(170deg) saturate(4) contrast(200%)",
  }
}));

const List = ({ bannerImage }) => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <div className={classes.bannerContainer}>
      <Grid container direction="row" alignItems="center" style={{ height: '80%', paddingTop: 20 }}>
        <Grid item sm={6} className={classes.bannerImageContainer}>
          <CardMedia
            component="img"
            classes={{ media: classes.bannerNewImage }}
            className={classes.bannerImage}
            image={bannerImage}
          />
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
