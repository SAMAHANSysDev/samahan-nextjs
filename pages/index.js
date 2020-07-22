import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Banner from '../components/home/banner';
import Help from '../components/home/help';
import NewsFeed from '../components/home/newsfeed';
import Projects from '../components/home/projects';
import SocialMedia from '../components/home/social-media';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  spacer: {
    height: 100
  },
  rootContainer: {
    width: '100%',
    margin: 0
  }
}));

const List = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      {/* Insert header here! */}
      <Banner />
      <div className={classes.contentContainer}>
        <div className={classes.spacer}></div>
        
        <Projects />

        <div className={classes.spacer}></div>

        <Help />

        <div className={classes.spacer}></div>

        <NewsFeed />

        <div className={classes.spacer}></div>
        
        <SocialMedia />
      </div>
    </div>
  );
};

export default List;
