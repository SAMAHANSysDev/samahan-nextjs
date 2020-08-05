import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  raffleContainer: {
    position: 'relative',
    color: '#01253C',
    backgroundImage: `url(${cdnURL}/fiesta_raffle_bg.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '30vw',
    paddingLeft: '37%',
    paddingRight: '37%',
    paddingTop: '7%',
    paddingBottom: '7%',
    textAlign: 'center'
  },
}));

const Page = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.raffleContainer}>
        <Typography variant="h2" style={{ fontSize: '3.5vw' }}>Online Raffle Mechanics</Typography>
        <div style={{ height: '2vw' }} />
        <Button variant="contained" color="primary" style={{ fontSize: '1.5vw' }} disableElevation onClick={() => router.push('/fiesta')}>
          Read More
        </Button>
      </div>
    </>
  );
};

export default Page;
