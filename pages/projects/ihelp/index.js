import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  
  rootContainer: {
    width: '100%',
    margin: 0
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      {/* Insert header here! */}
      Hello Wimpy Kid Fans
    </div>
  );
};

export default Page;