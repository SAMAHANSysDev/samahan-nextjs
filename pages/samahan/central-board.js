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

const CentralBoard = ({ centralBoard, clusterReps, departmentHeads }) => {
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
            <Typography variant="h3" style={{ color: 'white' }}>SAMAHAN Central Board</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" style={{ color: 'white' }}>2021-2022</Typography>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center" spacing={4} style={{ paddingLeft: 'clamp(50px, 10vw, 100px)', paddingRight: 'clamp(50px, 10vw, 100px)' }}>
              { centralBoard.map((member) => (
                <Grid item md={6} lg={3}>
                  <Card className={classes.cardRoot} elevation={0} variant="outlined">
                    <CardActionArea disabled>
                    <CardMediaWP
                      className={classes.cardMedia}
                      imageId={member.featured_media}
                      title={member.position}
                    />
                    <CardContent style={{ color: theme.palette.primary.main }}>
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
              )) }
            </Grid>
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
            <Typography variant="h4" style={{ color: theme.palette.primary.main }}>Deputies and Appointees</Typography>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center" spacing={4} style={{ paddingLeft: 'clamp(50px, 10vw, 100px)', paddingRight: 'clamp(50px, 10vw, 100px)' }}>
              { [...departmentHeads, ...clusterReps].map((member) => (
                <Grid item md={6} lg={3}>
                  <Card className={classes.cardRoot} style={{ borderColor: theme.palette.primary.main }} elevation={0} variant="outlined">
                    <CardActionArea disabled>
                    <CardMediaWP
                      className={classes.cardMedia}
                      imageId={member.featured_media}
                      title={member.acf.position}
                    />
                    <CardContent style={{ color: theme.palette.primary.main }}>
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
    let [centralBoard, clusterReps, departments] = await Promise.all([
      WP.centralBoard().perPage(100),
      WP.clusterReps().perPage(100),
      WP.departments().perPage(100)
    ]);

    const departmentHeads = departments.reduce((accumulator, department) => {
      if (department.acf.first_title) {
        accumulator.push({
          featured_media: department.acf.first_display_photo || null,
          acf: {
            name: department.acf.first_title_name,
            position: `${department.acf.name} ${department.acf.first_title}`,
            email: department.acf.first_title_email,
          }
        });
      }
      if (department.acf.second_title_title) {
        accumulator.push({
          featured_media: department.acf.second_display_photo || null,
          acf: {
            name: department.acf.second_title_name,
            position: `${department.acf.name} ${department.acf.second_title}`,
            email: department.acf.second_title_email,
          }
        });
      }
      return accumulator
    }, [])

    return { props: { 
      centralBoard: sort(centralBoard).asc(x => parseInt(x.acf.order)), 
      clusterReps: sort(clusterReps).asc(x => x.acf.position), 
      departmentHeads: sort(departmentHeads).asc(x => x.acf.position)
    }, revalidate: 10 };
  } catch (err) {
    console.log(err)
    return { props: { centralBoard: [], clusterReps: [], departmentHeads: [] }, revalidate: 10 };
  }
}

export default CentralBoard;