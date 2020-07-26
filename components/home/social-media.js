import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

const useStyles = makeStyles((theme) => ({
  
  headerWithDivider: {
    display: 'flex',
    alignItems: 'center'
  },
  dividerSocialMedia: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
    marginLeft: 20
  }
}));

const List = () => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <>
      <div className={classes.headerWithDivider}>
        <Typography variant="h3">
          Social Media
        </Typography>
        <div className={classes.dividerSocialMedia}></div>
      </div><br />

      <Grid container direction="row" spacing={6} alignItems="center">
        <Grid item md>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="addusamahan"
            options={{height: 800, width: '80vw'}}
          />
        </Grid>
        <Grid item md>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="IHelpSAMAHAN"
            options={{height: 800, width: '80vw'}}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default List;
