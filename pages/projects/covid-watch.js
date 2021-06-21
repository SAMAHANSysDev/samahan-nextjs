import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  respContainer: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%',
    height: '100%'
  },
  respIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0
  }
}));

const CovidWatch = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={4}
        justify="center"
      >
        <Grid item style={{
          height: '100vh',
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
          backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
          paddingLeft: 'clamp(50px, 10vw, 100px)',
          paddingRight: 'clamp(50px, 10vw, 100px)',
        }}>
          <Card style={{ height: '100%', maxWidth: 910, borderRadius: 20, margin: 'auto' }}>
            <CardContent className={classes.respContainer}>
              <iframe className={classes.respIframe} src="https://public.tableau.com/shared/Y5G4887QT?:showVizHome=no" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{
          paddingTop: theme.spacing(12),
          paddingBottom: theme.spacing(12)
        }}>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                  <Card variant="outlined" style={{ borderRadius: 20, borderColor: theme.palette.primary.main }}>
                    <CardContent>
                      <CardMedia
                        style={{
                          width: 300,
                          height: 300
                        }}
                        image={`${cdnURL}/21-22/Wash Hands Icon.png`}
                        title="Wash Hands"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="primary">Wash Hands</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                  <Card variant="outlined" style={{ borderRadius: 20, borderColor: theme.palette.primary.main }}>
                    <CardContent>
                      <CardMedia
                        style={{
                          width: 300,
                          height: 300
                        }}
                        image={`${cdnURL}/21-22/Cover Mouth and Face Icon.png`}
                        title="Wash Hands"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="primary">Cover Mouth and Face</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                  <Card variant="outlined" style={{ borderRadius: 20, borderColor: theme.palette.primary.main }}>
                    <CardContent>
                      <CardMedia
                        style={{
                          width: 300,
                          height: 300
                        }}
                        image={`${cdnURL}/21-22/Social Distancing Icon.png`}
                        title="Wash Hands"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="primary">Social Distancing</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
          backgroundImage: 'linear-gradient(to right, #1637BC, #2D8AEA)',
          paddingTop: '10rem',
          paddingBottom: '10rem',
          paddingLeft: 'clamp(50px, 10vw, 100px)',
          paddingRight: 'clamp(50px, 10vw, 100px)'
        }}>
          <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h3" color="secondary">COVID Watch x iHELP SAMAHAN</Typography>
            </Grid>
            <Grid item>
              <Typography color="secondary">With the country being in a national public emergency, the SAMAHAN, together with the Department of Campaigns and Advocacies and iHELP SAMAHAN will monitor the progress of the country in dealing with COVID-19. In collaboration with the NSEC and NSMSEC, this platform shall inform the student body with real-time information of government response through the official SAMAHAN Website.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CovidWatch;