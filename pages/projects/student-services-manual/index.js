import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import dynamic from 'next/dynamic';
import { sort } from 'fast-sort';

const ServicesList = dynamic(() => import('components/projects/student-services-manual/services-list'));

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import WP from 'utils/wordpress';
import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  
  rootContainer: {
    width: '100%',
    marginBottom: 80
  },
}));

const Page = ({ studentServices }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>

      <div style={{ height: 100 }} />

      <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
        <Grid item sm>
          <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em' }}>
            SAMAHAN
          </Typography>
          <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em' }}>
            Student Services
          </Typography><br />
          <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
            Student Manual for Services offered by the University
          </Typography>
          <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
            samahan.addu.edu.ph
          </Typography>
        </Grid>
        <Grid item sm>
          <img src={`${cdnURL}/board-student-services.png`} style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <div style={{ height: 100 }}></div>

      <div style={{ margin: 'auto', width: '90%' }}>
        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <ServicesList list={studentServices} />
          <Grid item sm>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="addusamahan"
              options={{height: 800, width: '100vw'}}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    let studentServices = await WP.studentServices().perPage(100);
    sort(studentServices).asc(x => x.acf.name);
    
    return { props: { studentServices }, revalidate: 10 };
  } catch (err) {
    console.log(err)
    return { props: { studentServices: [] }, revalidate: 10 };
  }
}

export default Page;
