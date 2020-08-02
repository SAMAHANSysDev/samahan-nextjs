import React from "react";
import Nav from "navigation/nav";
import NavBurger from "navigation/nav-burger";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import { fade, makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';

import { cdnURL } from 'utils/constants';


const useStyles = makeStyles((theme) => ({
  samahanLogo: {
    width: 'calc(180px + 1.5vw)',
    marginTop: '10px',
    marginBottom: '10px'
  },
  motionLogo: {
    width: 'calc(120px + 1vw)',
    marginTop: '10px',
    marginBottom: '10px'
  },
  root: {
    flexGrow: 1,
  },
  title: {
    margin: 'auto'
  },
  secondaryLogo: {
    display: 'block',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  searchButton: {
    marginLeft: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4),
    width: '100%',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
      marginLeft: theme.spacing(1),
      width: 'auto',
      display: 'block',
    },
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      marginLeft: theme.spacing(1),
      width: 'auto',
      display: 'block',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchAppBar() {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <IconButton
            onClick={toggleDrawer(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'} open={drawer} onClose={toggleDrawer(false)}>
            <NavBurger onChosen={() => setDrawer(false)} />
          </Drawer>
          <div className={classes.title}>
            <img className={classes.samahanLogo} src={`${cdnURL}/Samahan-Top-Bar-Logo.png`} />
          </div>
          <Nav />
          {/*<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Newsfeed"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            edge="end"
            className={classes.searchButton}
            color="inherit"
            aria-label="open drawer"
          >
            <SearchIcon />
          </IconButton>*/}
          <div className={classes.secondaryLogo}>
            <img className={classes.motionLogo} src={`${cdnURL}/72nd%20Ateneo%20Fiesta%20White.png`} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Connect the Header component to get access to the `state` in it's `props`
export default SearchAppBar;
