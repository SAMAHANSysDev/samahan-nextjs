import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import boardMembers from 'data/samahan/board-members';

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
  dividerBoardMembers: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        <Grid item sm={8}>
          <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item sm style={{ width: '100%' }}>
              <div className={classes.dividerBoardMembers} />
            </Grid>
            <Grid item sm>
              <Typography variant="h3" component="h4" className={classes.contentHeader}>
                Central Board Members
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea disabled>
              <CardMedia
                className={classes.cardMedia}
                image={boardMembers[0].img}
                title={boardMembers[0].position}
              />
              <CardContent>
                <Typography variant="h5">
                  {boardMembers[0].name}
                </Typography>
                <Typography variant="subtitle2">
                  {boardMembers[0].position}
                </Typography>
                <Typography variant="subtitle2">
                  {boardMembers[0].email}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        { boardMembers.map((member, index) => {
          if (index !== 0) {
            return (
              <Grid item sm={4} key={member.email}>
                <Card className={classes.cardRoot} elevation={0} variant="outlined">
                  <CardActionArea disabled>
                    <CardMedia
                      className={classes.cardMedia}
                      image={member.img}
                      title={member.position}
                    />
                    <CardContent>
                      <Typography variant="h5">
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle2">
                        {member.position}
                      </Typography>
                      <Typography variant="subtitle2">
                        {member.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          } else {
            return null;
          }
        })}
      </Grid>
    </>
  );
};

export default Page;
