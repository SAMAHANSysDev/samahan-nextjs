import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { cdnURL } from 'utils/constants';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardMediaWP from 'components/card-media-wp';
import CardContent from '@material-ui/core/CardContent';

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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
    width: '100%',
    margin: 'auto'
  },
  dividerBoardMembers: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
  },
}));

const RecruitmentPubmats = [
  `${cdnURL}/21-22/recruitment/RecWeek-Header.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-AUTOCOMMS1.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-AUTOCOMMS2.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-COMMS.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-DAA.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-DCA.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-DDRM.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-ESU.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-LOGIS.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-OBA.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-PROD.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-R_D.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-S_S.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-SCT.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-SYSDEV.png`,
]

const Departments = ({ departments }) => {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <>
      <div 
        style={{ 
          minHeight: '100vh', 
          backgroundPosition: 'center bottom', 
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
          backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
          padding: theme.spacing(8),
          boxSizing: 'border-box'
        }}
      >
        <div className="slide-container">
          <Slide transitionDuration={500} indicators easing="ease">
            { RecruitmentPubmats.map((pubmat) => (
              <div
                className="each-fade"
                style={{
                  backgroundImage: `url(${pubmat})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: '90vw',
                  height: '80vh',
                  filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))',
                  marginBottom: '2rem'
                }}
              />
            )) }
          </Slide>
        </div>
      </div>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ 
          minHeight: '100vh',
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8)
        }}
      >
        <Grid item>
          <Typography variant="h4" style={{ color: theme.palette.primary.main }}>SAMAHAN Departments</Typography>
        </Grid>
        <Grid item>
          <Grid container justify="center" alignItems="center" spacing={4}>
            { departments.map((department) => (
              <Grid item md={6} lg={3}>
                <Card className={classes.cardRoot} style={{ borderColor: theme.palette.primary.main }} elevation={0} variant="outlined">
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
                </Card>
              </Grid>
            )) }
          </Grid>
        </Grid>
      </Grid>
    </>
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