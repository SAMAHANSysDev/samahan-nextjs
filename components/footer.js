import React from "react";

import Typography from '@material-ui/core/Typography';
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
    marginTop: 200
  },
  text: {
    color: theme.palette.secondary.main,
    textAlign: 'center'
  },
  footerImage: {
    position: 'absolute',
    width: '90vw',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '-11vw'
  }
}));

function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={`${cdnURL}/samahan-fiesta-footer.png`} className={classes.footerImage} />
      <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
        Copyright {(new Date()).getFullYear()} SAMAHAN Central Board | Developed by SAMAHAN Creative Team and SAMAHAN System Development
      </Typography>
    </div>
  );
}

// Connect the Header component to get access to the `state` in it's `props`
export default SearchAppBar;
