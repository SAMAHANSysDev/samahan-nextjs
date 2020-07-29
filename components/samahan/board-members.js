import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMediaWP from 'components/card-media-wp';
import CardContent from '@material-ui/core/CardContent';

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
  dividerBoardMembers: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
  },
}));

const Page = ({ members: boardMembers }) => {
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
              <Typography variant="h3" component="h4">
                Central Board Members
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea disabled>
              <CardMediaWP
                className={classes.cardMedia}
                imageId={boardMembers[0].featured_media}
                title={boardMembers[0].position}
              />
              <CardContent>
                <Typography variant="h5">
                  {boardMembers[0].acf.name}
                </Typography>
                <Typography variant="subtitle2">
                  {boardMembers[0].acf.position}
                </Typography>
                <Typography variant="subtitle2">
                  {boardMembers[0].acf.email}
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
              <Grid item sm={4} key={member.acf.email}>
                <Card className={classes.cardRoot} elevation={0} variant="outlined">
                  <CardActionArea disabled>
                    <CardMediaWP
                      className={classes.cardMedia}
                      imageId={member.featured_media}
                      title={member.acf.position}
                    />
                    <CardContent>
                      <Typography variant="h5">
                        {member.acf.name}
                      </Typography>
                      <Typography variant="subtitle2">
                        {member.acf.position}
                      </Typography>
                      <Typography variant="subtitle2">
                        {member.acf.email}
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
