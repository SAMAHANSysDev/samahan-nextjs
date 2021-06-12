import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import WP from 'utils/wordpress';
import dynamic from 'next/dynamic';

import {
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const FAQs = dynamic(() => import('components/samahan-help-portal/faqs'));

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

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  bannerContainer: {
    minHeight: '30vh',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
    paddingLeft: 'clamp(50px, 10vw, 100px)',
    paddingRight: 'clamp(50px, 10vw, 100px)',
    color: 'white'
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  },
}));

const Page = ({ faqs }) => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const [search, setSearch] = React.useState('');

  console.log(faqs);
  const filteredFaqs = React.useMemo(() => {
    return faqs.filter((faq) => {
      const string = `${faq.acf.question} ${faq.acf.answer}`.toUpperCase();
      return string.includes(search.toUpperCase());
    });
  }, [faqs, search]);

  return (
    <div className={classes.rootContainer}>
      <Grid container direction="column" spacing={3} alignItems="center" justify="center" className={classes.bannerContainer}>
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant="h4" style={{ lineHeight: '0.8em' }}>
            Welcome to the
          </Typography>
          <Typography variant="h2">
            HELP PORTAL
          </Typography>
        </Grid>
        <Grid item style={{ width: '80vw' }}>
          <CssTextField 
            label="Search" 
            variant="outlined" 
            fullWidth
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </Grid>
      </Grid>

      <div style={{ height: 100 }}></div>

      <div style={{ margin: 'auto', width: '90%' }}>
        <FAQs faqs={filteredFaqs} />
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    const res = await WP.helpPortal().perPage(30);
    // res = sort(res).asc(x => x.acf.question);
    
    if (res) { 
      return { props: { faqs: res }, revalidate: 10 };
    } else {
      return { props: { faqs: [] }, revalidate: 10 };
    }
  } catch (err) {
    console.log(err)
    return { props: { faqs: [] }, revalidate: 10 };
  }
}

export default Page;
