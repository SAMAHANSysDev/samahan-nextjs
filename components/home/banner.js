import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: '90vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
  bannerTextContainer: {
    position: 'relative',
    float: 'right',
    marginTop: 'calc(100px + 1em)',
    marginRight: 'calc(60px - 2em)',
    fontWeight: 20,
    color: theme.palette.secondary.main,
    zIndex: 3
  },
  bannerText: {
    textAlign: 'right',
    zIndex: 3,
    margin: 0
  },
  bannerHeader: {
    textAlign: 'right',
    fontSize: '10vw',
    fontFamily: 'Montserrat',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: theme.palette.primary.main,
    margin: 0
  },
  bannerImageContainer: {
    position: 'absolute',
    left: 'calc(20px + 2em)',
    top: 'calc(100px + 2em)',
    zIndex: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  bannerImage: {
    width: '110vh',
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
      <div className={classes.bannerImageContainer}>
        <CardMedia
          component="img"
          classes={{ media: classes.bannerNewImage }}
          className={classes.bannerImage}
          image={bannerImage}
        />
      </div>
      <div className={classes.bannerTextContainer}>
        <Typography variant="h6" className={classes.bannerText} style={{ lineHeight: '0.9em' }}>
          Welcome to
        </Typography>
        <Typography variant="h1" component="h2" className={classes.bannerHeader} style={{ lineHeight: '0.9em' }}>
          SAMAHAN
        </Typography>
        <Typography variant="h6" className={classes.bannerText} style={{ lineHeight: '0.9em' }}>
          The Official Student Government of
        </Typography>
        <Typography variant="h6" className={classes.bannerText} style={{ lineHeight: '0.9em' }}>
          Ateneo de Davao University
        </Typography>
      </div>
    </div>
  );
};

export default List;
