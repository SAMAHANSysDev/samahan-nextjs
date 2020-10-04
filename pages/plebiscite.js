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
import firebase from 'utils/firebase';

const db = firebase.firestore();
const votesRef = db.collection('votes');

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

  const [accessToken, setAccessToken] = React.useState(null);
  const [uid, setUid] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cluster, setCluster] = React.useState('');
  const [yearLevel, setYearLevel] = React.useState('');

  const [accCounts, setAccCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  })

  const [bmCounts, setBmCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  })

  const [csCounts, setCsCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  })

  const [humletCounts, setHumletCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  })

  const [nsmCounts, setNsmCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  })

  const [seaCounts, setSeaCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  })

  const [soeCounts, setSoeCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  })

  const [sonCounts, setSonCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  })

  const [ssCounts, setSsCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  })

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [vote, setVote] = React.useState(null);
  const [confirm, setConfirm] = React.useState(false);

  const [receipt, setReceipt] = React.useState(null);
  const [receiptChecked, setReceiptChecker] = React.useState(false);

  const getCount = () => {
    let clusters = ['acc', 'bm', 'cs', 'humlet', 'nsm', 'sea', 'soe', 'son', 'ss'];

    clusters.forEach((cluster) => {
      db.collection('statistics').doc('cluster_count').collection(cluster).doc('count')
      .onSnapshot((snapshot) => {
        let data = snapshot.data();
        switch (cluster) {
          case 'acc':
            setAccCounts(data);
            break;
          case 'bm':
            setBmCounts(data);
            break;
          case 'cs':
            setCsCounts(data);
            break;
          case 'humlet':
            setHumletCounts(data);
            break;
          case 'nsm':
            setNsmCounts(data);
            break;
          case 'sea':
            setSeaCounts(data);
            break;
          case 'soe':
            setSoeCounts(data);
            break;
          case 'son':
            setSonCounts(data);
            break;
          case 'ss':
            setSsCounts(data);
            break;
        }
      })
    })
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      setUid(user.uid);
      setLoggedIn(true);

      votesRef.doc(user.uid).onSnapshot((snapshot) => {
        if (snapshot.exists) {
          setReceipt(snapshot.data().vote);
        }
        setReceiptChecker(true);
      })
    } else {
      // User is signed out.
      setLoggedIn(false);
    }
  });

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
    setAccessToken(response.getAuthResponse().id_token);
    var credential = firebase.auth.GoogleAuthProvider.credential(response.getAuthResponse().id_token);
    setFirstName(response.getBasicProfile().getGivenName());
    setLastName(response.getBasicProfile().getFamilyName());
    setEmail(response.getBasicProfile().getEmail());

    firebase.auth().signInWithCredential(credential).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(errorCode, errorMessage, email);
      setAccessToken(null);
      setFirstName('');
      setLastName('');
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    votesRef.doc(uid).set({
      owner: uid,
      firstName,
      lastName,
      email,
      cluster,
      yearLevel,
      vote: vote === 'yes' ? true : false
    })

    switch (yearLevel) {
      case '1':
        db.collection('statistics').doc('cluster_count').collection(cluster).doc('count').update({
          first: firebase.firestore.FieldValue.increment(1)
        });
        break;
      case '2':
        db.collection('statistics').doc('cluster_count').collection(cluster).doc('count').update({
          second: firebase.firestore.FieldValue.increment(1)
        });
        break;
      case '3':
        db.collection('statistics').doc('cluster_count').collection(cluster).doc('count').update({
          third: firebase.firestore.FieldValue.increment(1)
        });
        break;
      case '4':
        db.collection('statistics').doc('cluster_count').collection(cluster).doc('count').update({
          fourth: firebase.firestore.FieldValue.increment(1)
        });
        break;
      case '5':
        db.collection('statistics').doc('cluster_count').collection(cluster).doc('count').update({
          fifth: firebase.firestore.FieldValue.increment(1)
        });
        break;
    }
  }

  React.useEffect(() => {
    getCount();
  }, [])

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
              { accessToken && loggedIn && receiptChecked && receipt === null ?
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <TextField label="First Name" variant="outlined" fullWidth style={{ marginBottom: 20 }} value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled required />
                  <TextField label="Last Name" variant="outlined" fullWidth style={{ marginBottom: 20 }} value={lastName} onChange={(e) => setLastName(e.target.value)} disabled required />
                  <TextField label="Email" variant="outlined" fullWidth style={{ marginBottom: 20 }} value={email} onChange={(e) => setEmail(e.target.value)} disabled required />
                  <FormControl variant="outlined" fullWidth style={{ marginBottom: 20 }}>
                    <InputLabel htmlFor="outlined-age-native-simple">Cluster</InputLabel>
                    <Select
                      value={cluster}
                      onChange={(e) => setCluster(e.target.value)}
                      native
                      label="Cluster"
                      required
                    >
                      <option aria-label="None" value="" />
                      <option value="acc">ACC</option>
                      <option value="bm">BM</option>
                      <option value="cs">CS</option>
                      <option value="humlet">HUMLET</option>
                      <option value="nsm">NSM</option>
                      <option value="sea">SEA</option>
                      <option value="soe">SOE</option>
                      <option value="son">SON</option>
                      <option value="ss">SS</option>
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" fullWidth style={{ marginBottom: 20 }}>
                    <InputLabel htmlFor="outlined-age-native-simple">Year Level</InputLabel>
                    <Select
                      native
                      label="Year Level"
                      value={yearLevel}
                      onChange={(e) => setYearLevel(e.target.value)}
                      required
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>1st Year</option>
                      <option value={2}>2nd Year</option>
                      <option value={3}>3rd Year</option>
                      <option value={4}>4th Year</option>
                      <option value={5}>5th Year</option>
                    </Select>
                  </FormControl>
                  <div style={{ height: 30 }} />
                  <Typography variant="h5">Do you approve the proposed SAMAHAN Constitution?</Typography>
                  <div style={{ height: 30 }} />

                  <Button onClick={() => { window.open(`${cdnURL}/2020%20SAMAHAN%20Constitution%20Final%20Draft.pdf`, '_blank'); }} color="primary" variant="contained">Read Proposed SAMAHAN 2020 Constitution</Button><br/><br/>

                  <FormControl component="fieldset" required>
                    <RadioGroup name="vote" value={vote} onChange={(e) => setVote(e.target.value)}>
                      <FormControlLabel value="yes" control={<Radio color="primary" />} label="I approve the newly proposed 2020 SAMAHAN Constitution" />
                      <FormControlLabel value="no" control={<Radio color="primary" />} label="I don't approve the newly proposed 2020 SAMAHAN Constitution" />
                    </RadioGroup>
                  </FormControl>
                  <div style={{ height: 15 }} />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={confirm}
                        onChange={(e) => setConfirm(e.target.checked)}
                        color="primary" 
                      />
                    }
                    label="I have read and understood the newly proposed 2020 SAMAHAN Constitution"
                    labelPlacement="end"
                  />
                  <div style={{ height: 30 }} />
                  <Button color="primary" variant="contained" disabled={!confirm} type="submit">Submit Vote</Button>
                </form>
              : 
                accessToken && loggedIn && receiptChecked && receipt !== null ?
                  <>
                    <TextField label="First Name" variant="outlined" fullWidth style={{ marginBottom: 20 }} value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled required />
                    <TextField label="Last Name" variant="outlined" fullWidth style={{ marginBottom: 20 }} value={lastName} onChange={(e) => setLastName(e.target.value)} disabled required />
                    <TextField label="Email" variant="outlined" fullWidth style={{ marginBottom: 20 }} value={email} onChange={(e) => setEmail(e.target.value)} disabled required />
                    <div style={{ height: 20 }} />
                    <Typography variant="h5">
                      {
                        receipt ?
                          'You approved the newly proposed 2020 SAMAHAN Constitution.'
                        :
                          'You did not approve the newly proposed 2020 SAMAHAN Constitution.'
                      }
                    </Typography>
                  </>
                :
                  <>
                    <GoogleLogin
                      clientId="92766825240-07sjnkc89irqulu0nmsfsd259rfdch4l.apps.googleusercontent.com"
                      buttonText="Login with AdDU Email"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                      hostedDomain="addu.edu.ph"
                    />
                  </>
              }
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
