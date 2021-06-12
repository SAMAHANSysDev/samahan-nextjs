import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from 'components/Button';
import Hidden from '@material-ui/core/Hidden';

import WP from 'utils/wordpress';
import dynamic from 'next/dynamic';
import { sort } from 'fast-sort';

const Advocasix = dynamic(() => import('components/samahan/advocasix'));
const BoardMembers = dynamic(() => import('components/samahan/board-members'));
const ClusterReps = dynamic(() => import('components/samahan/cluster-reps'));
const Departments = dynamic(() => import('components/samahan/departments'));

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 'clamp(50px, 10vw, 100px)',
    paddingRight: 'clamp(50px, 10vw, 100px)',
    boxSizing: 'border-box'
  },
  advocasixContainer: {
    paddingLeft: 'clamp(50px, 10vw, 100px)',
    paddingRight: 'clamp(50px, 10vw, 100px)',
    boxSizing: 'border-box',
    backgroundColor: '#F2F3F4'
  },
  bannerContainer: {
    minHeight: '100vh',
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: 'url("https://samahan.stdcdn.com/21-22/samahan landing.svg"), linear-gradient(to right, #1637BC, #2D8AEA)',
    paddingTop: '100px',
    paddingBottom: '200px',
    paddingLeft: 'clamp(50px, 10vw, 100px)',
    paddingRight: 'clamp(50px, 10vw, 100px)',
    color: 'white'
  },
  lastContainer: {
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: 'linear-gradient(to right, #1637BC, #2D8AEA)',
    paddingTop: '100px',
    paddingBottom: '100px',
    paddingLeft: 'clamp(50px, 10vw, 100px)',
    paddingRight: 'clamp(50px, 10vw, 100px)',
    color: 'white'
  },
}));

const Page = ({ centralBoard, clusterReps, departments }) => {
  // Get the data of the current list.

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Grid container direction="row" alignItems="center" className={classes.bannerContainer}>
        <Grid item md>
          <Typography variant="h1" style={{ marginBottom: '2rem', fontWeight: 600, letterSpacing: 8 }}>
            SAMAHAN
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '2rem' }}>
            Many challenging events characterized our experiences in the past year. The shift from our conventional university setting to a fully online set-up was further punctuated by the hardships of pioneering the first wave of digital learners. However, true to our Atenean upbringing, we carry on with renewed hope, clearer goals, and the dream of restoring a SAMAHAN with a strengthened resolve to own the future.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '2rem' }}>
            Our future can only begin with us. To own it, we call upon each Atenean to take hold of our visions and come together in actualizing our collective capacity as one student body. This new journey is shared by student leaders and everyone in the community – our athletes, artists, scholars, and all students alike. In owning our future, we involve everyone to ensure that no Atenean is left behind.
          </Typography>
        </Grid>
        <Grid item md>
        </Grid>
      </Grid>
      <div style={{ height: 100 }} />
      <Grid container direction="row" alignItems="center" justify="center" className={classes.container}>
        <Grid item md>
          <img src={`${cdnURL}/21-22/OTF-1.png`} width="80%" style={{ marginBottom: '4rem' }} />
        </Grid>
        <Grid item md={8} style={{ color: theme.palette.primary.main }}>
          <Typography variant="body1" style={{ marginBottom: '2rem' }}>
            Finally, as we transition to the new normal, we aim to pursue a future navigated by a community committed to embodying Magis in all its endeavors. Moving forward, the SAMAHAN recognizes that our future is defined by our experiences within the university and beyond it. In recognizing this, it speaks of a commitment to making a difference for the communities which we serve. Thus, we move towards building a studentry that remains socially conscious and is consistently engaged in initiatives for a better Ateneo, a better Mindanao, and a better Philippines. 
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '2rem' }}>
            As one SAMAHAN, we push forward towards a tomorrow we deserve. We will build upon maximizing opportunities in both physical and digital spaces. We remain committed to our mandate of providing genuine service to the community with an intensified dedication to empower Ateneans to remain actively involved in the process of moving forward.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '2rem' }}>
            As one SAMAHAN, we no longer wait for the future; we own the future.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ height: 100 }} />
      <div style={{ height: 100, backgroundColor: '#F2F3F4' }} />
      <div className={classes.advocasixContainer}>
        <Advocasix />
      </div>
      <div style={{ height: 100, backgroundColor: '#F2F3F4' }} />
      <Grid container direction="row" alignItems="center" justify="center" className={classes.lastContainer}>
        <Grid item md={4}>
          <Typography variant="h4" style={{ fontWeight: 600 }}>
            SAMAHAN
          </Typography>
          <Typography variant="h4" style={{ marginBottom: '2rem', fontWeight: 600 }}>
            Central Board
          </Typography>
          <Button variant="contained" disableElevation style={{ marginBottom: '4rem' }}>Learn More</Button>
          <Typography variant="h4" style={{ fontWeight: 600 }}>
            SAMAHAN
          </Typography>
          <Typography variant="h4" style={{ marginBottom: '2rem', fontWeight: 600 }}>
            Departments
          </Typography>
          <Button variant="contained" disableElevation style={{ marginBottom: '4rem' }}>Learn More</Button>
        </Grid>
        <Grid item md={8}>
          <center>
            <img src="https://samahan.stdcdn.com/21-22/samahan asset.png" width="80%" />
          </center>
        </Grid>
      </Grid>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    let [centralBoard, clusterReps, departments] = await Promise.all([
      WP.centralBoard().perPage(100),
      WP.clusterReps().perPage(100),
      WP.departments().perPage(100)
    ]);

    sort(centralBoard).asc(x => parseInt(x.acf.order));
    sort(clusterReps).asc(x => x.acf.position);
    sort(departments).asc(x => x.acf.name);

    return { props: { centralBoard, clusterReps, departments }, revalidate: 10 };
  } catch (err) {
    console.log(err)
    return { props: { centralBoard: [], clusterReps: [], departments: [] }, revalidate: 10 };
  }
}

export default Page;
