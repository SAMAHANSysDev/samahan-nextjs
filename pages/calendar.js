import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  calendarContainer: {
    display: 'flex',
    width: '80%',
    margin: 'auto',
    justifyContent: 'center'
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  }
}));

const Page = () => {
  // Get the data of the current list.
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      {/* Insert header here! */}
      <img src="https://samahan-cdn.snry.xyz/1.-June.png" width="100%" />
      <div style={{ height: 100 }} />
      <div className={classes.calendarContainer}>
        <Calendar />
      </div>
    </div>
  );
};

export default Page;