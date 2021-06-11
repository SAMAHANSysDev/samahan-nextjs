import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

import Typography from '@material-ui/core/Typography';

import Accordion from './projects-accordion';
import Button from 'components/Button';

import Grid from '@material-ui/core/Grid';

import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    minWidth: 275,
    borderRadius: 0,
    backgroundColor: '#F2F3F4'
  },
  cardMedia: {
    height: 350,
  }
}));

const List = () => {
  // Get the data of the current list.
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" color="primary" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
        SAMAHAN Initiatives
      </Typography>

      <Accordion />
      
    </>
  );
};

export default List;
