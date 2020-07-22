import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  contentHeader: {
    fontFamily: 'Open\ Sans',
  },
  rootContainer: {
    width: '100%',
    margin: 0
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
          <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(30px + 4vw)' }}>
            SAMAHAN
          </Typography>
          <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: 'calc(30px + 3vw)' }}>
            #ConstiNatinTo
          </Typography><br />
          <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(10px + 1vw)' }}>
          SAMAHAN Constitutional Reform for AY 2020-2021
          </Typography>
          <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(10px + 1vw)' }}>
            samahan.addu.edu.ph
          </Typography>
        </Grid>
        <Grid item sm>
          <img src="https://samahan-cdn.snry.xyz/board-consti.png" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <div style={{ height: 100 }}></div>

      <div style={{ margin: 'auto', width: '90%' }}>
        <Grid container direction="row" spacing={6} className={classes.contentContainer}>

          {/*<Grid item sm>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="addusamahan"
              options={{height: 800, width: '100vw'}}
            />
          </Grid>*/}
        </Grid>
      </div>
    </div>
  );
};

export default Page;
