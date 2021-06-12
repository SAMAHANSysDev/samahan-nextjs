import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMediaWP from 'components/card-media-wp';
import CardContent from '@material-ui/core/CardContent';

import WP from 'utils/wordpress';
import { sort } from 'fast-sort';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    width: 285,
    margin: 'auto',
    borderRadius: 20,
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

const Departments = ({ departments }) => {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid 
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ 
            minHeight: '100vh', 
            backgroundPosition: 'center bottom', 
            backgroundSize: 'cover', 
            backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
            padding: theme.spacing(8)
          }}
        >
          <Grid item>
            
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid 
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ 
            minHeight: '100vh', 
            padding: theme.spacing(8)
          }}
        >
          <Grid item>
            <Typography variant="h4" style={{ color: theme.palette.primary.main }}>SAMAHAN Departments</Typography>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center" spacing={4} style={{ paddingLeft: 'clamp(50px, 10vw, 100px)', paddingRight: 'clamp(50px, 10vw, 100px)' }}>
              { departments.map((department) => (
                <Grid item md={6} lg={3}>
                  <Card className={classes.cardRoot} style={{ borderColor: theme.palette.primary.main }} elevation={0} variant="outlined">
                    <CardActionArea disabled>
                    <CardMediaWP
                      className={classes.cardMedia}
                      imageId={department.featured_media}
                      title={department.acf.name}
                    />
                    <CardContent style={{ color: theme.palette.primary.main }}>
                      <Typography variant="body1" style={{ textAlign: 'center' }}>
                        <b>{department.acf.name}</b>
                      </Typography>
                    </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )) }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export async function getStaticProps(ctx) {
  try {
    let [departments] = await Promise.all([
      WP.departments().perPage(100)
    ]);

    return { props: { 
      departments: sort(departments).asc(x => x.acf.name)
    }, revalidate: 10 };
  } catch (err) {
    console.log(err)
    return { props: { departments: [] }, revalidate: 10 };
  }
}

export default Departments;