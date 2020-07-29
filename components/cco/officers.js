import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMediaWP from 'components/card-media-wp';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  
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

const Page = ({ list: officers }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Paper elevation={0} style={{ padding: 60 }}>
      <Typography variant="h3" component="h4">
        CCO Officers
      </Typography>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        { officers.map((officer) => {
          return (
            <Grid item sm={4} key={officer.acf.email}>
              <Card className={classes.cardRoot} elevation={0} variant="outlined">
                <CardActionArea disabled>
                  <CardMediaWP
                    className={classes.cardMedia}
                    imageId={officer.featured_media}
                    title={officer.acf.position}
                  />
                  <CardContent>
                    <Typography variant="h5">
                      {officer.acf.name}
                    </Typography>
                    <Typography variant="subtitle2">
                      {officer.acf.position}
                    </Typography>
                    <Typography variant="subtitle2">
                      {officer.acf.email}
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
