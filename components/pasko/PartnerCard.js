import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import dynamic from 'next/dynamic';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ImageGallery from 'react-image-gallery';

const Snowfall = dynamic(() => import('react-snowfall'), { ssr: false });

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%',
    color: 'white'
  },
  
  rootContainer: {
    width: '100%',
  },
  paskoHeader: {
    fontFamily: 'Gaegu',
    color: 'white',
  },
  paskoContent: {
    fontFamily: 'Gaegu',
    fontWeight: 100,
    color: 'white',
    fontSize: '1.5rem',
  },
  text: {
    fontFamily: 'Gaegu'
  }
}));

const Page = ({
  name,
  type,
  logo,
  children,
  facebook,
  twitter,
  instagram,
  items,
}) => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.rootContainer}>
      <div>
        <Grid container direction="row" spacing={3} alignItems="center" justify="center" className={classes.contentContainer}>
          <Grid item sm={3}>
            <center>
              <img src={logo} width="100%" />
            </center>
          </Grid>
          <Grid item sm>
            <Grid container justify="center" alignItems="center" spacing={2} style={{ marginBottom: theme.spacing(2) }}>
              <Grid item>
                <Typography variant="h2" component="div" className={classes.paskoHeader}>
                  {name}
                </Typography>
              </Grid>
              <Grid item xs>
                <Chip size="small" label={type} />
              </Grid>
            </Grid>
            {children}
            {items ? (
              <>
                <Button variant="contained" style={{ marginTop: theme.spacing(2) }} onClick={handleClickOpen}>View Items</Button>
                <br />
              </>
            ) : null}
            {facebook ? (
              <IconButton color="secondary" style={{ marginTop: theme.spacing(2) }} onClick={() => window.open(facebook, '_blank')}>
                <FacebookIcon />
              </IconButton>
            ) : null}
            {twitter ? (
              <IconButton color="secondary" style={{ marginTop: theme.spacing(2) }} onClick={() => window.open(twitter, '_blank')}>
                <TwitterIcon />
              </IconButton>
            ) : null}
            {instagram ? (
              <IconButton color="secondary" style={{ marginTop: theme.spacing(2) }} onClick={() => window.open(instagram, '_blank')}>
                <InstagramIcon />
              </IconButton>
            ) : null}
            { items ? (
              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
              >
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>
                  <ImageGallery
                    lazyLoad
                    items={items.map((item) => ({
                      original: item,
                      thumbnail: item
                    }))}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            ) : null }
            <div style={{ height: 100 }}></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;
