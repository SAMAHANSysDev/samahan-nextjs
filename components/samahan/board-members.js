import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Open\ Sans',
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

  const boardMembers = [
    {
      name: 'Samantha Claire Cayona',
      position: 'SECRETARY-GENERAL',
      email: 'scgcayona@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/2.png'
    },
    {
      name: 'Rona Marie De Castro',
      position: 'TREASURER',
      email: 'rmcdecastro@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/3.png'
    },
    {
      name: 'Elijah James Banuelos',
      position: 'ADMINSTRATIVE UNDERSECRETARY',
      email: 'ejcbanuelos@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/8.png'
    },
    {
      name: 'Riza Claire Pardillo',
      position: 'FINANCE SECRETARY',
      email: 'rizcapardillo@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/2.png'
    },
    {
      name: 'Marion James Tarnate',
      position: 'FINANCE UNDERSECRETARY',
      email: 'mjttarnate@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/9.png'
    },
    {
      name: 'Aldriena Thehani Angas',
      position: 'CHIEF-OF-STAFF',
      email: 'attangas@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/5.png'
    },
    {
      name: 'Mary Angelie M. Ocon',
      position: 'EXECUTIVE SECRETARY',
      email: 'mamocon@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/6.png'
    },
    {
      name: 'Michael John Vorgs Villas',
      position: 'EXECUTIVE UNDERSECRETARY',
      email: 'mjvrvillas@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/4.png'
    },
    {
      name: 'Euneece Olbes',
      position: 'ADMINISTRATIVE SECRETARY',
      email: 'eafolbes@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/7.png'
    }
  ]

  return (
    <>
      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        <Grid item sm={8}>
          <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item sm style={{ width: '100%' }}>
              <div className={classes.dividerBoardMembers} />
            </Grid>
            <Grid item sm>
              <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ fontSize: 'calc(20px + 1.5vw)' }}>
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
                image="https://samahan-cdn.snry.xyz/1.png"
                title="President"
              />
              <CardContent>
                <Typography style={{ fontSize: '1.7em' }}>
                  Renz Allan S. Lacorte
                </Typography>
                <Typography style={{ fontSize: '1em' }}>
                  PRESIDENT
                </Typography>
                <Typography style={{ fontSize: '1em' }}>
                  raslacorte@addu.edu.ph
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        { boardMembers.map((member) => {
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
                    <Typography style={{ fontSize: '1.7em' }}>
                      {member.name}
                    </Typography>
                    <Typography style={{ fontSize: '1em' }}>
                      {member.position}
                    </Typography>
                    <Typography style={{ fontSize: '1em' }}>
                      {member.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Page;
