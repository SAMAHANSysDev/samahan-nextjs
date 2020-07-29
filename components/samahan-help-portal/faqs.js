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
  },
  wordWrap: {
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    msWordBreak: 'break-word',
    wordBreak: 'break-word',
  }
}));

const Page = ({ faqs }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Grid item sm={9}>
      <div className={classes.accordions}>
        { faqs.map((faq) => (
          <Accordion key={faq.id} variant="outlined" elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant="body1" className={classes.heading}>{faq.acf.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" component="div" className={classes.wordWrap} dangerouslySetInnerHTML={{ __html: faq.acf.answer }} />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Grid>
  );
};

export default Page;
