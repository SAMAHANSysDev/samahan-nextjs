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
    paddingTop: '8%',
    paddingBottom: '8%',
    textAlign: 'center'
  },
}));

const Page = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <div style={{ marginTop: '8vw' }}>
      <div style={{ width: '100%', whiteSpace: 'nowrap', color: '#01253C', overflow: 'hidden' }}>
        <Typography variant="h2">NTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! </Typography>
      </div>
      <div className={classes.raffleContainer}>
        <Typography variant="h2" style={{ fontSize: '3.5vw', lineHeight: '90%' }}>Online Raffle Mechanics</Typography>
        <div style={{ height: '2vw' }} />
        <Button variant="contained" style={{ fontSize: '1.5vw', backgroundColor: '#e61b4a', color: '#fff' }} disableElevation onClick={() => router.push('/fiesta/raffle')}>
          Read More
        </Button>
      </div>
      <div style={{ width: '100%', whiteSpace: 'nowrap', color: '#01253C', overflow: 'hidden' }}>
        <Typography variant="h2">TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! ENTER TO WIN! </Typography>
      </div>
    </div>
  );
};

export default Page;
