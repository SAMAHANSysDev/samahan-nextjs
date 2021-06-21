import React from 'react';

import ReCAPTCHA from "react-google-recaptcha";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  withStyles,
  makeStyles
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from 'components/Button';

const WhiteCheckbox = withStyles({
  root: {
    color: 'white',
    '&$checked': {
      color: 'white',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const NotifAlert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'white',
      borderRadius: 20
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-input": {
      color: "white"
    },
    "& .MuiInputLabel-root": {
      color: "white"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white"
    },
    "&:hover .MuiInputLabel-root": {
      color: "white"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    }
  }
});

const Alert = () => {

  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [network, setNetwork] = React.useState('');
  const [agreed, setAgreed] = React.useState(false);
  const [recaptcha, setRecaptcha] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const classes = useStyles();

  const submit = async () => {
    setLoading(true);
    const res = await (await fetch('/api/samahan-alert', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ name, number, network })
    })).json()

    setOpen(true);
    if (res?.success) {
      setName('');
      setNumber('');
      setNetwork('');

      setMessage('Successfully submitted contact details for SAMAHAN Alerts!');
      setError(false);
    } else {
      setMessage(res?.error || 'Error occurred. Please try again!');
      setError(true);
    }
    setLoading(false);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Grid container direction="row" justify="center" spacing={6} alignItems="center" style={{
        minHeight: '100vh',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
        paddingLeft: 'clamp(50px, 10vw, 100px)',
        paddingRight: 'clamp(50px, 10vw, 100px)',
        paddingTop: '4rem',
        paddingBottom: '4rem'
      }}>
        <Grid item md style={{ color: 'white' }}>
          <Typography variant="h2" color="secondary" style={{ lineHeight: '0.8em', fontWeight: 700, marginBottom: '4rem' }}>
            SAMAHAN Alert
          </Typography>
          <Typography style={{ marginBottom: '2rem' }}>
            We will make sure that all information will be received by all Ateneans. We will continue maximizing text messaging to reach the student body, with the assurance that all our social media accounts will become more active in answering the questions of the student body.
          </Typography>
          <Typography style={{ fontStyle: 'italic' }}>
            Should you wish to cancel, you may email us at samahan@addu.edu.ph with the subject: SAMAHAN Alerts Cancellation. We will be terminating your subscription within 1-3 working days.
          </Typography>
        </Grid>
        <Grid item md>
          <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'white', borderRadius: 20 }}>
            <CardContent style={{ padding: '4rem' }}>
              <Typography variant="h3" color="secondary" style={{ lineHeight: '0.8em', fontWeight: 700, marginBottom: '4rem' }}>
                Sign up now!
              </Typography>
              <CssTextField 
                label="Full Name" 
                variant="outlined" 
                fullWidth
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                required
                disabled={loading}
              />
              <div style={{ height: '2rem' }} />
              <CssTextField 
                label="Cellphone Number" 
                variant="outlined" 
                fullWidth
                value={number}
                onChange={(e) => {
                  const regexTest = /^[0-9\b]+$/;
                  if (e.target.value === '' || regexTest.test(e.target.value)) {
                    setNumber(e.target.value)
                  }
                }}
                required
                disabled={loading}
              />
              <div style={{ height: '2rem' }} />
              <FormControl variant="outlined" fullWidth>
                <CssTextField
                  label="Mobile Network Operator" 
                  variant="outlined" 
                  fullWidth 
                  value={network}
                  onChange={(e) => {
                    setNetwork(e.target.value)
                  }}
                  required
                  disabled={loading}
                  select
                >
                  <MenuItem value="Smart">Smart</MenuItem>
                  <MenuItem value="Globe">Globe</MenuItem>
                  <MenuItem value="DITO">DITO</MenuItem>
                  <MenuItem value="TNT">Talk 'N Text (TNT)</MenuItem>
                  <MenuItem value="Sun">Sun Cellular</MenuItem>
                  <MenuItem value="TM">TM</MenuItem>
                  <MenuItem value="Gomo">Gomo</MenuItem>
                </CssTextField>
              </FormControl>
              <div style={{ height: '2rem' }} />
              

              <FormControlLabel
                value="end"
                control={<WhiteCheckbox onChange={(e) => {
                  setAgreed(e.target.checked)
                }} value={agreed} disabled={loading} />}
                label={
                  <Typography style={{ fontStyle: 'italic' }}>
                    By submitting this form, you have read and understood the Privacy Policy of Smart, and Routee, and provide consent that SAMAHAN , through the aforementioned companies will be enrolling you to the SAMAHAN Alerts.
                  </Typography>
                }
                labelPlacement="end"
              />
              <div style={{ height: '2rem' }} />

              <ReCAPTCHA
                sitekey="6Lfa6y0bAAAAABOrUIBwSLq2xjs2Xv_URU8YahYs"
                onChange={setRecaptcha}
              />
              <div style={{ height: '2rem' }} />

              <Button variant="contained" disableElevation onClick={submit} disabled={!agreed || !network || !name || !number || !recaptcha || loading}>Submit</Button>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <NotifAlert onClose={handleClose} severity={error ? "error" : "success"}>
          {message}
        </NotifAlert>
      </Snackbar>
    </>
  )
}

export default Alert;