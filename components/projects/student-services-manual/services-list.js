import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 'bold'
  },
  accordions: {
    maxWidth: '80vw'
  }
}));

const Page = ({ list }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Grid item sm={9}>
      <div className={classes.accordions}>
        { list.map((service) => (
          <Accordion variant="outlined" elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1" className={classes.heading}>{service.acf.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: service.acf.description }} />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Grid>
  );
};

export default Page;
