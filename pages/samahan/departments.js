import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { cdnURL } from 'utils/constants';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardMediaWP from 'components/card-media-wp';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from 'components/Button';

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ImgsViewer from "react-images-viewer";

import WP from 'utils/wordpress';
import { sort } from 'fast-sort';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    width: 150,
    margin: 'auto',
    borderRadius: 180,
  },
  cardMedia: {
    height: 150,
    width: '100%',
    margin: 'auto'
  },
  dividerBoardMembers: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
  },
}));

const recruitmentURLs = [
  ''
]

const RecruitmentPubmats = [
  `${cdnURL}/21-22/recruitment/RecWeek-Header.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-DCA.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-ESU.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-OBA.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-DAA.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-DDRM.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-COMMS.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-PROD.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-R_D.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-SCT.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-SYSDEV.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-LOGIS.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-S_S.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-AUTOCOMMS1.png`,
  `${cdnURL}/21-22/recruitment/RecWeek-AUTOCOMMS2.png`
]

const Departments = ({ departments }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [currImage, setCurrImage] = React.useState(0);
  const [viewerOpen, setViewerOpen] = React.useState(false);

  const goToNextImage = () => {
    setCurrImage((prev) => ((prev + 1) % RecruitmentPubmats.length));
  }

  const goToPrevImage = () => {
    setCurrImage((prev) => ((prev - 1) % RecruitmentPubmats.length));
  }

  const closeViewer = () => {
    setViewerOpen(false);
    setCurrImage(0);
  }
  
  return (
    <>
      <div 
        style={{ 
          minHeight: '75vh', 
          backgroundPosition: 'center bottom', 
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
          backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
          padding: theme.spacing(8),
          boxSizing: 'border-box'
        }}
      >
        <Hidden xsDown>
          <div className="slide-container">
            <Slide transitionDuration={500} indicators easing="ease">
              { RecruitmentPubmats.map((pubmat, i) => (
                <div
                  className="each-fade"
                  key={`recruitment-pubmat-${i}`}
                  style={{
                    backgroundImage: `url(${pubmat})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: '80vw',
                    height: '80vh',
                    filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))',
                    margin: 'auto',
                    marginBottom: '2rem'
                  }}
                />
              )) }
            </Slide>
          </div>
        </Hidden>
        <Hidden smUp>
          <Grid container direction="column" spacing={3} alignItems="center" justify="center" style={{ color: 'white', minHeight: '75vh' }}>
            <Grid item style={{ textAlign: 'center' }}>
              <Typography variant="h4" style={{ lineHeight: '0.8em' }}>
                SAMAHAN
              </Typography>
              <Typography variant="h2">
                Departments
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" disableElevation onClick={() => setViewerOpen(true)}>View Recruitments</Button>
            </Grid>
          </Grid>
        </Hidden>
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
            { departments.map((department, i) => (
              <Grid item sm={3} md={2} lg={2} key={`departments-${i}`}>
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <Card className={classes.cardRoot} style={{ borderColor: theme.palette.primary.main }} elevation={0} variant="outlined">
                      <CardActionArea onClick={department.acf?.recruitment_url ? () => window.open(department.acf.recruitment_url, "_blank") : null}>
                        <CardMediaWP
                          className={classes.cardMedia}
                          imageId={department.featured_media}
                          title={department.acf.name}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item>
                    <CardContent style={{ color: theme.palette.primary.main, maxWidth: 150 }}>
                      <Typography variant="body1" style={{ textAlign: 'center' }}>
                        <b>{department.acf.name}</b>
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Grid>
            )) }
          </Grid>
        </Grid>
      </Grid>
      <ImgsViewer
        imgs={[
          ...RecruitmentPubmats.map((pubmat) => ({ src: pubmat }))
        ]}
        currImg={currImage}
        isOpen={viewerOpen}
        onClickPrev={goToPrevImage}
        onClickNext={goToNextImage}
        onClose={closeViewer}
      />
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