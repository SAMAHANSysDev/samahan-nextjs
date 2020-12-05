import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import dynamic from 'next/dynamic';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const Snowfall = dynamic(() => import('react-snowfall'), { ssr: false });

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    minHeight: '90vh',
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
    zIndex: 3,
    marginBottom: theme.spacing(8),
  },
  bannerText: {
    textAlign: 'right',
    zIndex: 3,
    margin: 0,
    fontFamily: 'Gaegu',
    fontWeight: 300
  },
  bannerHeader: {
    textAlign: 'right',
    fontSize: '10vw',
    margin: 0,
    fontFamily: 'Gaegu',
  },
  bannerImage: {
    maxHeight: '70vh',
  },
  bannerLeft: {
    background: 'url("/assets/christmas-tree-2.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    width: '100%',
    height: '85vh',
  }
}));

const List = () => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <div className={classes.bannerContainer}>
      <Grid container direction="row" alignItems="center" style={{ height: '80%', paddingTop: 20 }}>
        <Grid item sm={6} component="div" className={classes.bannerLeft} />
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
      { typeof window !== "undefined" ? (
        <Snowfall />
      ) : null }
    </div>
  );
};

export default List;
