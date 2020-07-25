import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import { useRouter } from 'next/router';

import Button from '@material-ui/core/Button';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.rootContainer}>

      <div style={{ height: 100 }} />

      <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
        <Grid item md={7}>
          <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em' }}>
            #ConstiNatinTo
          </Typography><br />
          <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
            SAMAHAN Constitutional Reform for AY 2020-2021
          </Typography>
          <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
            samahan.addu.edu.ph
          </Typography>
        </Grid>
        <Grid item md>
          <img src={`${cdnURL}/board-consti.png`} style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <div style={{ height: 100 }}></div>

      <div style={{ margin: 'auto', width: '90%' }}>
        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item sm={8}>
            <Typography variant="h4" component="h2" className={classes.contentHeader}>What is the Constitution?</Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>In general, the constitution is considered as the highest law of the land. The constitution describes the basic principles of the state which revolves around the separation of powers, checks and balances, people’s participation, political disposition, etc. The constitution also includes the structures and processes of the government wherein it identifies the rudimentary national positions, branches of government, hierarchy of power, etc. It also states and identifies the processes of budget dissemination, law-making, bureaucracy, etc. Lastly, the constitution expresses the fundamental rights of the constituents which cannot be changed by a simple legislative act.</Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>In the context of SAMAHAN, the SAMAHAN constitution is the foundation of the rights and welfare of the students. It states the basic principles of the student government in representing the student body of Ateneo de Davao University. It also includes the scope of SAMAHAN itself, from its systems and processes, student government structure, and limitation of powers. The SAMAHAN Constitution protects the autonomy of students through emphasizing its capability of self-governance.</Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>To check the revision progress, </Typography>
            <Button variant="contained" color="primary" onClick={() => router.push('/projects/constinatinto/the-revision-progress')}>Click here</Button>
            <div style={{ height: 50 }}></div>
            <Typography variant="h4" component="h2" className={classes.contentHeader}>Functions of the Constitution</Typography>
            <Typography variant="body1">
              <ul>
                <li>The SAMAHAN constitution legitimizes the student government of the university. It enables the SAMAHAN to function as a student government.</li>
                <li>The SAMAHAN constitution serves as the embodiment of democracy within the institution, which enables the student government to recognize the power of the student population in decision making.</li>
                <li>It serves as a guide in administering the Ateneo students, through defining the limitation of powers of the students in position, and by stating the detailed system and processes of the student government. Which identifies the constitutionality of each and every action that has been or will be committed.</li>
                <li>It states and protects the fundamental rights of students as a constituent of the university and SAMAHAN.</li>
                <li>It declares the capacity of students for self-governance and decision making.</li>
                <li>It resolves conflict in terms of issues concerning, impeachment, elections, autonomy, and misuse of powers.</li>
                <li>The SAMAHAN Constitution is the basis for obtaining accountability.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item sm>
            <Typography variant="h4" component="h2" className={classes.contentHeader} style={{ marginBottom: 10 }}>Contact Personnels</Typography>
            <Grid container direction="row">
              <Grid item sm style={{ minWidth: '150px' }}>
                <Typography variant="h6">Jyp Phyllis Galan</Typography>
                <Typography variant="caption">jpcgalan@addu.edu.ph</Typography><br/>
                <Typography variant="caption">09178710948</Typography>
              </Grid>
              <Grid item sm style={{ minWidth: '150px' }}>
                <Typography variant="h6">Brian Joseph Unabia</Typography>
                <Typography variant="caption">bjmunabia@addu.edu.ph</Typography><br/>
                <Typography variant="caption">09084056623</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;
