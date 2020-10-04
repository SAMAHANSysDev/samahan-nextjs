import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';

import { useRouter } from 'next/router';

import { Carousel } from 'react-responsive-carousel';

import Button from '@material-ui/core/Button';

import { cdnURL } from 'utils/constants';

import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { GoogleLogin } from 'react-google-login';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '90%',
    paddingBottom: 100
  },
  
  rootContainer: {
    width: '100%',
    overflowX: 'hidden',
    backgroundColor: '#ECF4FF'
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

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className={classes.rootContainer}>

      <div style={{ height: 100 }} />
      <div style={{ backgroundImage: `url(${cdnURL}/hill-blue.png)`, backgroundSize: 'fit', backgroundPosition: 'center bottom', backgroundRepeat: 'no-repeat' }}>
        <Grid container direction="row" spacing={3} className={classes.contentContainer}>
          <Grid item md={5} xs={12}>
            <img src={`${cdnURL}/consti-logo-colored.png`} width="100%" style={{ marginTop: 30, marginBottom: 60 }} />
            <Button onClick={() => { window.open(`${cdnURL}/2020%20SAMAHAN%20Constitution%20Final%20Draft.pdf`, '_blank'); }} color="primary" variant="contained">SAMAHAN 2020 Constitution Final Draft</Button><br/><br/>
            <Button onClick={() => { window.open(`${cdnURL}/What%E2%80%99s%20new%20in%20the%202020%20SAMAHAN%20Constitution_.pdf`, '_blank'); }} color="primary" variant="contained">What's new in the SAMAHAN Constitution?</Button>
          </Grid>
          <Grid item md={7} xs={false}>
            <img src={`${cdnURL}/hero.png`} width="100%" />
          </Grid>
        </Grid>
        <Hidden smDown>
          <div style={{ height: 'calc(280px - 9vw)' }} />
        </Hidden>
      </div>

      <div style={{ backgroundImage: 'linear-gradient(180deg, #3b37ff, transparent, transparent, transparent, transparent)' }}>
        <div style={{ height: 150 }}></div>
        <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
          <Grid item md={6} xs={12}>
            <Typography variant="h2">
              Bagong Consti,<br/> Bagong SAMAHAN
            </Typography>
            <Typography variant="body1" component="div" style={{ marginTop: '10px', marginBottom: '10px' }}>
              <p>This academic year, the SAMAHAN Central Board with the leadership of the SAMAHAN Department of Students Rights and Welfare reinforces its solidified effort to finally translate a dream into a reality. </p>
              <p>After years reform attempts, it is about time that the student body shall come together to pave the way to the genesis of a new SAMAHAN Constitution. A constitution that is responsive to the current setting of Ateneo, a constitution that could withstand the changing of times, and a constitution that puts premium significance to wider student representation and autonomy. </p>
              <p>Let us all unite and take part of this change. This is our <b>constitution – CONSTI NATIN TO! Bagong Consti, Bagong SAMAHAN.</b></p>
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container justify="center">
              <Grid item>
                <iframe className={classes.avp} src="https://www.youtube.com/embed/Fq8qcSEBeV8?controls=1&loop=1&autoplay=1" frameBorder="0" allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div style={{ height: 100 }}></div>

      <div style={{ backgroundColor: '#6195D1', padding: 0 }}>
        <div style={{ backgroundImage: `url(${cdnURL}/consti-logo.png)`, backgroundBlendMode: 'darken', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ height: 50 }}></div>
          <Grid container>
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Grid container alignItems="center"
                style={{ backgroundImage: `url(${cdnURL}/consti-person.png)`, backgroundSize: 'contain', backgroundPosition: 'left bottom', backgroundRepeat: 'no-repeat', minHeight: 300 }}
                justify="center"
              >
                <Grid item xs>
                  <div style={{ height: 300 }} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h3" color="secondary" style={{ fontSize: '1.5em' }}>
                    What is a
                  </Typography>
                  <Typography variant="h2" color="secondary" style={{ fontSize: '3em' }}>
                    Constitution?
                  </Typography>
                  <Button onClick={() => handleClickOpen(0)} color="primary" variant="contained" style={{ marginTop: 20 }}>Learn More</Button><br/><br/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Grid container alignItems="center" justify="center" style={{ backgroundImage: `url(${cdnURL}/functions-person.png)`, backgroundSize: 'contain', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat', minHeight: 300 }}>
                <Grid item xs>
                  <Typography variant="h3" color="secondary" style={{ fontSize: '1.5em' }}>
                    Functions of a
                  </Typography>
                  <Typography variant="h2" color="secondary" style={{ fontSize: '3em' }}>
                    Constitution
                  </Typography>
                  <Button onClick={() => handleClickOpen(1)} color="primary" variant="contained" style={{ marginTop: 20 }}>Learn More</Button><br/><br/>
                </Grid>
                <Grid item xs>
                  <div style={{ height: 300 }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 0 }}>
              <Grid container alignItems="center" justify="center" style={{ backgroundImage: `url(${cdnURL}/revise-person.png)`, backgroundSize: 'contain', backgroundPosition: 'left bottom', backgroundRepeat: 'no-repeat', minHeight: 300 }}>
                <Grid item xs>
                  <div style={{ height: 300 }} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h3" color="secondary" style={{ fontSize: '1.5em' }}>
                    Why
                  </Typography>
                  <Typography variant="h2" color="secondary" style={{ fontSize: '3em' }}>
                    Revise?
                  </Typography>
                  <Button onClick={() => handleClickOpen(2)} color="primary" variant="contained" style={{ marginTop: 20 }}>Learn More</Button><br/><br/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 0 }}>
              <Grid container alignItems="center" justify="center" style={{ backgroundImage: `url(${cdnURL}/ratify-person.png)`, backgroundSize: 'contain', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat', minHeight: 300 }}>
                <Grid item xs>
                  <Typography variant="h3" color="secondary" style={{ fontSize: '1.5em' }}>
                    Why
                  </Typography>
                  <Typography variant="h2" color="secondary" style={{ fontSize: '3em' }}>
                    Ratify?
                  </Typography>
                  <Button onClick={() => handleClickOpen(3)} color="primary" variant="contained" style={{ marginTop: 20 }}>Learn More</Button><br/><br/>
                </Grid>
                <Grid item xs>
                  <div style={{ height: 300 }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

      <div style={{ height: 100 }}></div>

      <Grid container direction="row" spacing={6} className={classes.contentContainer} alignItems="center">
        <Grid item xs={12} md={6}>
          <Carousel autoPlay={false} showThumbs={true} showArrows={true}>
            <div>
              <img src={`${cdnURL}/dear-samahan.png`} />
            </div>
            <div>
              <img src={`${cdnURL}/dear-samahan-1.png`} />
            </div>
            <div>
              <img src={`${cdnURL}/dear-samahan-2.png`} />
            </div>
            <div>
              <img src={`${cdnURL}/dear-samahan-3.png`} />
            </div>
            <div>
              <img src={`${cdnURL}/dear-samahan-4.png`} />
            </div>
            <div>
              <img src={`${cdnURL}/dear-samahan-5.png`} />
            </div>
            <div>
              <img src={`${cdnURL}/dear-samahan-6.png`} />
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6}>
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

      <Grid container direction="row" spacing={6} className={classes.contentContainer} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent style={{ padding: 40 }}>
              <Typography variant="h4">Plebiscite</Typography>
              <div style={{ height: 30 }} />
              <TextField label="First Name" variant="outlined" fullWidth style={{ marginBottom: 20 }} />
              <TextField label="Last Name" variant="outlined" fullWidth style={{ marginBottom: 20 }} />
              <FormControl variant="outlined" fullWidth style={{ marginBottom: 20 }}>
                <InputLabel htmlFor="outlined-age-native-simple">Cluster</InputLabel>
                <Select
                  native
                  label="Year Level"
                >
                  <option aria-label="None" value="" />
                  <option value="ACC">ACC</option>
                  <option value="BM">BM</option>
                  <option value="CS">CS</option>
                  <option value="HUMLET">HUMLET</option>
                  <option value="NSM">NSM</option>
                  <option value="SEA">SEA</option>
                  <option value="SOE">SOE</option>
                  <option value="SON">SON</option>
                  <option value="SS">SS</option>
                </Select>
              </FormControl>
              <FormControl variant="outlined" fullWidth style={{ marginBottom: 20 }}>
                <InputLabel htmlFor="outlined-age-native-simple">Year Level</InputLabel>
                <Select
                  native
                  label="Year Level"
                >
                  <option aria-label="None" value="" />
                  <option value={1}>1st Year</option>
                  <option value={2}>2nd Year</option>
                  <option value={3}>3rd Year</option>
                  <option value={4}>4th Year</option>
                  <option value={5}>5th Year</option>
                </Select>
              </FormControl>
              <GoogleLogin
                clientId="92766825240-07sjnkc89irqulu0nmsfsd259rfdch4l.apps.googleusercontent.com"
                buttonText="Login with AdDU Email"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                hostedDomain="addu.edu.ph"
              />
              <div style={{ height: 30 }} />
              <Typography variant="h5">Do you approve the proposed SAMAHAN Constitution?</Typography>
              <div style={{ height: 30 }} />

              <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1">
                  <FormControlLabel value={true} control={<Radio />} label="I approve the newly proposed 2020 SAMAHAN Constitution" />
                  <FormControlLabel value={false} control={<Radio />} label="I don't approve the newly proposed 2020 SAMAHAN Constitution" />
                </RadioGroup>
              </FormControl>
              <div style={{ height: 15 }} />
              <FormControlLabel
                value={true}
                control={<Checkbox color="primary" />}
                label="I have read and understood the newly proposed 2020 SAMAHAN Constitution"
                labelPlacement="end"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={`${cdnURL}/char12.png`} width="100%" />
        </Grid>
      </Grid>

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
