import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Divider from '@material-ui/core/Divider';

import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import officers from '../../data/cco/officers';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    width: 285,
    margin: 'auto',
    borderRadius: 0,
  },
  cardMedia: {
    height: 285,
    width: 285,
    margin: 'auto'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px 40px 30px',
    width: '80%',
    overflow: 'scroll',
    maxHeight: 500,
    outline: 'none'
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Paper elevation={0} style={{ padding: 60 }}>
      <Typography variant="h3" component="h4" className={classes.contentHeader}>
        CCO Officers
      </Typography>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        { officers.map((officer) => {
          return (
            <Grid item sm={4} key={officer.email}>
              <Card className={classes.cardRoot} elevation={0} variant="outlined">
                <CardActionArea disabled>
                  <CardMedia
                    className={classes.cardMedia}
                    image={officer.img}
                    title={officer.position}
                  />
                  <CardContent>
                    <Typography variant="h5">
                      {officer.name}
                    </Typography>
                    <Typography variant="subtitle2">
                      {officer.position}
                    </Typography>
                    <Typography variant="subtitle2">
                      {officer.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Page;
