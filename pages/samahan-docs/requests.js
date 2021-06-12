import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from 'components/Button';
import SaveIcon from '@material-ui/icons/Save';

import WP from 'utils/wordpress';
import dynamic from 'next/dynamic';
import { sort } from 'fast-sort';

const Banner = dynamic(() => import('components/samahan-docs/banner'));
const NavButtons = dynamic(() => import('components/samahan-docs/nav-buttons'));
const Instructions = dynamic(() => import('components/samahan-docs/requests-ins'));

import { backendURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    width: '80%',
    margin: 'auto'
  },
  contentContainer: {
    width: '90%',
    margin: 'auto'
  },
  
  rootContainer: {
    width: '100%',
    marginBottom: 80
  },
}));

const Page = ({ docs }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <div style={{ height: 100 }} />

      <Banner />

      <div style={{ height: 100 }}></div>
      <div style={{ margin: 'auto', width: '80%' }}>
        {/* Buttons for other docs */}
        <NavButtons />
        <div style={{ height: 100 }}></div>

        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item sm={4}>
            {/* Templates */}
            <Typography variant="h4">Templates</Typography>
            { docs.map((doc) => (
              doc.acf.file ?
                <Button key={doc.id} variant="outlined" color="primary" startIcon={<SaveIcon />}
                  disableElevation fullWidth style={{ marginTop: 20 }}
                  onClick={() => window.open(`${doc.acf.file}`, '_blank')}
                >
                  {doc.acf.file_title}
                </Button>
              : null
            ))}
          </Grid>
          <Grid item sm={8}>
            {/* Instructions */}
            <Typography variant="h4">Instructions</Typography>
            <div style={{ height: 20 }}></div>
            <Instructions docs={docs} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    let docs = await WP.requestDocs().perPage(100);

    docs = sort(docs).asc(x => x.acf.title);

    return { props: { docs }, revalidate: 10 };
  } catch (err) {
    console.log(err)
    return { props: { docs: [] }, revalidate: 10 };
  }
}

export default Page;
