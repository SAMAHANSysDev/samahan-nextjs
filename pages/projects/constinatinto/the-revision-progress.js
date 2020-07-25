import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

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

  return (
    <div className={classes.rootContainer}>

      <div style={{ height: 100 }} />

      <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
        <Grid item sm>
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
        <Grid item sm>
          <img src={`${cdnURL}/board-consti.png`} style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <div style={{ height: 100 }}></div>

      <div style={{ margin: 'auto', width: '90%' }}>
        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item sm={8}>
            <Typography variant="h4" component="h2" className={classes.contentHeader}>Why do we need to revise and ratify the SAMAHAN Constitution?</Typography>
            <Typography variant="h6" component="h2" className={classes.contentHeader}>Revise?</Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The 1982 SAMAHAN Constitution is extremely outdated. </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>To begin, this constitution which established SAMAHAN was originally made for the College of Arts and Sciences alone — and this is explicitly stated in the preamble and other parts of the constitution. Thus, the terminologies used do not reflect the actual scope of power exercised by SAMAHAN for decades already. Even in the composition of the Central Board, the only identified Divisions to be part of it were Agriculture, Humanities/Philosophy, Social Science, Natural Sciences, Management Engineering, and Business Administration. </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>There is also a need to restructure SAMAHAN to better serve the needs of every Atenean and to strengthen its accountability measures. There is a need to improve the checks-and-balances of SAMAHAN to make sure that everyone in position is doing their duties appropriately. This restructuring is also needed to better delineate the powers and jurisdictions of various offices.</Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>Aside from terminologies and structures, some parts of the 1982 SAMAHAN Constitution are also vague, which may cause contentions on its true interpretations. This revision seeks to make this constitution as clear and specific as possible.</Typography>
            <div style={{ height: 50 }}></div>
            <Typography variant="h6" component="h2" className={classes.contentHeader}>Ratify?</Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>Before any constitution can formally take effect, it needs to be ratified by the people who are to be part of an organization. This is done through a plebiscite wherein the constituents vote for or against the passing of the constitution. Ratification, then, is needed to validate this document, de jure.</Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>In Article XVII of the 1982 SAMAHAN Constitution, it reads, “This constitution shall become effective upon ratification in a plebiscite by a simple majority vote of the SAMAHAN.” SAMAHAN here refers to the entire student body of the College of Arts and Sciences. However, since its inception in 1982, this document was never ratified by a simple majority of the student body involved. Thus, since 1982, the existence of SAMAHAN and the assumption of office of all officers are de facto. </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>That is why in this Constitutional Convention, the aims were to revise and finally ratify the constitution so that all activities undertaken by SAMAHAN can be considered as officially sanctioned by a legal and binding document.</Typography>
            <div style={{ height: 50 }}></div>
            <Typography variant="h4" component="h2" className={classes.contentHeader}>Plan of Actions</Typography>
            <img src={`${cdnURL}/constinatintofixed.png`} style={{ width: '100%' }} />
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
