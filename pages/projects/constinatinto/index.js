import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import { useRouter } from 'next/router';

import { Carousel } from 'react-responsive-carousel';

import Button from '@material-ui/core/Button';

import { cdnURL } from 'utils/constants';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  
  rootContainer: {
    width: '100%',
    marginBottom: 80,
  },
  avp: {
    width: '80vw',
    height: '80vw',
    [theme.breakpoints.up('md')]: {
      width: '30vw',
      height: '30vw',
    }
  },
  cardContainer: {
    width: '72vw',
    [theme.breakpoints.up('sm')]: {
      width: '36vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '18vw',
    }
  },
  imageContainer: {
    height: '72vw',
    [theme.breakpoints.up('sm')]: {
      height: '36vw',
    },
    [theme.breakpoints.up('md')]: {
      height: '18vw',
    }
  }
}));

const constiSlides = () => (
  <Carousel autoPlay={false} showThumbs={true} showArrows={true}>
    <div>
      <img src={`${cdnURL}/Constitution_0.jpg`} />
    </div>
    <div>
      <img src={`${cdnURL}/Constitution_1.jpg`} />
    </div>
    <div>
      <img src={`${cdnURL}/Constitution_2.jpg`} />
    </div>
  </Carousel>
)

const functionSlides = () => (
  <Carousel autoPlay={false} showThumbs={true} showArrows={true}>
    <div>
      <img src={`${cdnURL}/Function_0.jpg`} />
    </div>
    <div>
      <img src={`${cdnURL}/Function_1.jpg`} />
    </div>
    <div>
      <img src={`${cdnURL}/Function_2.jpg`} />
    </div>
  </Carousel>
)

const ratifySlides = () => (
  <Carousel autoPlay={false} showThumbs={true} showArrows={true}>
    <div>
      <img src={`${cdnURL}/Ratify_0.jpg`} />
    </div>
    <div>
      <img src={`${cdnURL}/Ratify_1.jpg`} />
    </div>
  </Carousel>
)

const reviseSlides = () => (
  <Carousel autoPlay={false} showThumbs={true} showArrows={true}>
    <div>
      <img src={`${cdnURL}/Revise_0.jpg`} />
    </div>
    <div>
      <img src={`${cdnURL}/Revise_1.jpg`} />
    </div>
    <div>
      <img src={`${cdnURL}/Revise_2.jpg`} />
    </div>
  </Carousel>
)

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const router = useRouter();

  const [openInfog, setInfog] = React.useState(false);
  const [slide, setSlide] = React.useState(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = (x) => {
    setInfog(true);
    switch (x) {
      case 0:
        setSlide(constiSlides);
        break;
      case 1:
        setSlide(functionSlides);
        break;
      case 2:
        setSlide(reviseSlides);
        break;
      case 3:
        setSlide(ratifySlides);
    }
  };

  const handleClose = () => {
    setInfog(false);
  };

  return (
    <div className={classes.rootContainer}>

      <div style={{ height: 100 }} />

      <div style={{ margin: 'auto', width: '90%' }}>

        <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
          <Grid item md={7} xs={12}>
            <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em' }}>
              Consti Natin To!
            </Typography><br />
            <Typography variant="h5" component="h2" style={{ lineHeight: '1.5em' }}>
              Bagong Consti, Bagong SAMAHAN
            </Typography>
            <Typography variant="body1" component="div" style={{ marginTop: '10px', marginBottom: '10px' }}>
              <p>This academic year, the SAMAHAN Central Board with the leadership of the SAMAHAN Department of Students Rights and Welfare reinforces its solidified effort to finally translate a dream into a reality. </p>
              <p>After years reform attempts, it is about time that the student body shall come together to pave the way to the genesis of a new SAMAHAN Constitution. A constitution that is responsive to the current setting of Ateneo, a constitution that could withstand the changing of times, and a constitution that puts premium significance to wider student representation and autonomy. </p>
              <p>Let us all unite and take part of this change. This is our <b>constitution – CONSTI NATIN TO! Bagong Consti, Bagong SAMAHAN.</b></p>
            </Typography>
          </Grid>
          <Grid item md={5} xs={12}>
            <iframe className={classes.avp} src="https://www.youtube.com/embed/Fq8qcSEBeV8?controls=1&loop=1&autoplay=1" frameborder="0" allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Grid>
        </Grid>

        <div style={{ height: 100 }}></div>

        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.cardContainer}>
              <CardActionArea onClick={() => handleClickOpen(0)}>
                <CardMedia
                  image={`${cdnURL}/Constitution_0.jpg`}
                  title="Constitution"
                  className={classes.imageContainer}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.cardContainer}>
              <CardActionArea onClick={() => handleClickOpen(1)}>
                <CardMedia
                  image={`${cdnURL}/Function_0.jpg`}
                  title="Function"
                  className={classes.imageContainer}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.cardContainer}>
              <CardActionArea onClick={() => handleClickOpen(2)}>
                <CardMedia
                  image={`${cdnURL}/Revise_0.jpg`}
                  title="Revise"
                  className={classes.imageContainer}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.cardContainer}>
              <CardActionArea onClick={() => handleClickOpen(3)}>
                <CardMedia
                  image={`${cdnURL}/Ratify_0.jpg`}
                  title="Ratify"
                  className={classes.imageContainer}
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <div style={{ height: 100 }}></div>

        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item xs={12} md={6}>
            <img src={`${cdnURL}/Timeline.jpg`} width="100%" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em' }}>
              #YesToConsti
            </Typography>
            <Typography variant="body1" component="div" style={{ marginTop: '10px', marginBottom: '10px' }}>
              <p>Ateneans, tuparin natin ang pangarap. Go out and vote <b>YES</b> during the plebiscite.</p>
            </Typography>
            <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', marginBottom: '10px' }}>
              #DearCONCON
            </Typography>
            <Carousel autoPlay={false} showThumbs={true} showArrows={true}>
              <div>
                <img src={`${cdnURL}/DearConcon_0.jpg`} />
              </div>
              <div>
                <img src={`${cdnURL}/DearConcon_1.jpg`} />
              </div>
              <div>
                <img src={`${cdnURL}/DearConcon_2.jpg`} />
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={openInfog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          {slide}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Page;
