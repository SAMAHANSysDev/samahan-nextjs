import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    minWidth: 275,
    borderRadius: 0,
  },
  cardMedia: {
    height: 350,
  }
}));

const List = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" className={classes.contentHeader}>
        Projects and Initiatives
      </Typography>

      <Grid container direction="row" spacing={3} alignItems="stretch">
        <Grid item component={Card} xs className={classes.cardRoot} elevation={0}>
          <CardMedia
            className={classes.cardMedia}
            image="https://samahan-cdn.snry.xyz/board-ihelp2-1.png"
            title="iHELP"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              iHELP SAMAHAN
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            iHelp SAMAHAN will be the umbrella program for all SAMAHAN- initiated efforts at addressing and aiding calamities. 
            At the core, while we can never be fully prepared for calamities, this will create an opportunity for us to respond more efficiently.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" disableElevation onClick={() => router.push('/projects/ihelp')}>
              Learn More
            </Button>
          </CardActions>
        </Grid>
        <Grid item component={Card} xs className={classes.cardRoot} elevation={0}>
          <CardMedia
            className={classes.cardMedia}
            image="https://samahan-cdn.snry.xyz/board-student-services.png"
            title="Student Service Manual"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Student Service Manual
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Together with the content from the SAMAHAN Guide Book, 
            student services manual includes the necessary information for the student body 
            regarding the different services offered by the various university offices.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" disableElevation onClick={() => router.push('/projects/student-services-manual')}>
              Learn More
            </Button>
          </CardActions>
        </Grid>
        <Grid item component={Card} xs className={classes.cardRoot} elevation={0}>
          <CardMedia
            className={classes.cardMedia}
            image="https://samahan-cdn.snry.xyz/board-consti.png"
            title="ConstiNatinTo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ConstiNatinTo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            The 1982 SAMAHAN Constitution is extremely outdated. Aside from terminologies and structures, 
            some parts of the 1982 SAMAHAN Constitution are also vague, which may cause contentions on its true interpretations. 
            This revision seeks to make this constitution as clear and specific as possible.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" disableElevation onClick={() => router.push('/projects/constinatinto')}>
              Learn More
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </>
  );
};

export default List;
