import React from "react";

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    padding: 20,
    paddingTop: '16vw',
    width: '100%',
    borderTop: '20px solid #e61b4a',
    marginTop: '15vw'
  },
  text: {
    color: theme.palette.secondary.main,
    textAlign: 'center'
  },
  footerImage: {
    position: 'absolute',
    width: '90vw',
    height: 'calc(40px + 25vw)',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '-13vw',
    backgroundImage: `url(${cdnURL}/samahan-fiesta-footer.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
}));

function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.footerImage} />
      <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
        Copyright {(new Date()).getFullYear()} SAMAHAN Central Board | Developed by SAMAHAN Creative Team and SAMAHAN System Development
      </Typography>
      <Typography variant="caption" color="textSecondary" component="p" className={classes.text}>
        Web Design by <Link href="https://twitter.com/sonroyaalmerol" color="inherit" target="_blank" rel="noopener">Son Roy Almerol</Link> and <Link href="https://twitter.com/jeyowthreeshwa" color="inherit" target="_blank" rel="noopener">Joeshua Dequiña</Link>
      </Typography>
    </div>
  );
}

// Connect the Header component to get access to the `state` in it's `props`
export default SearchAppBar;
