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

  const clusterRepresentatives = [
    {
      name: 'Rholien Rhoi Verallo',
      position: 'ACCOUNTANCY REPRESENTATIVE',
      email: 'rrgverallo@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/4.png'
    },
    {
      name: 'Hanna Marie B. Yarso',
      position: 'BUSINESS AND MANAGEMENT REPRESENTATIVE',
      email: 'hmbyarso@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/5.png'
    },
    {
      name: 'She-Chem Edward D. Gaspillo',
      position: 'HUMANITIES AND LETTERS REPRESENTATIVE',
      email: 'scedgaspillo@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/8.png'
    },
    {
      name: 'Gemarie Santos',
      position: 'NATURAL SCIENCES AND MATHEMATICS REPRESENTATIVE',
      email: 'grsantos@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/6.png'
    },
    {
      name: 'Ailene Renee Tagorda',
      position: 'SCHOOL OF EDUCATION REPRESENTATIVE',
      email: 'argtagorda@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/7.png'
    },
    {
      name: 'Ethan Joshua Daquipil',
      position: 'SCHOOL OF ENGINEERING AND ARCHITECTURE REPRESENTATIVE',
      email: 'ejudaquipil@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/9.png'
    },
    {
      name: 'Karlo Alessandro Torreon',
      position: 'SOCIAL SCIENCES REPRESENTATIVE',
      email: 'kadtorreon@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/10.png'
    },
    {
      name: 'Kyrr Justino Zerrudo',
      position: 'INTERIM NURSING REPRESENTATIVE',
      email: 'kjpzerrudo@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/1.png'
    },
    {
      name: 'Jolemarh Kairus Pandatu',
      position: 'INTERIM COMPUTER STUDIES REPRESENTATIVE',
      email: 'jkmpandatu@addu.edu.ph',
      img: 'https://samahan-cdn.snry.xyz/8.png'
    }
  ]

  return (
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ fontSize: 'calc(20px + 1.5vw)' }}>
        Cluster Representatives
      </Typography>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        { clusterRepresentatives.map((member) => {
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