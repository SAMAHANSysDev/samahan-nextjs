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

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.accordions}>
      <Accordion variant="outlined" elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="body1" className={classes.heading}>Concept Paper Approval</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div" className={classes.wordWrap}>
            <ol>
              <li>Prepare the concept paper containing the Rationale, Schedule of Activities, Budgetary and other information.</li>
              <li>Complete the signatories from the person who prepared the document, the president, and moderator of the club.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="body1" className={classes.heading}>Financial Report</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div" className={classes.wordWrap}>
            <ol>
              <li>The Auditor or Treasurer must submit a budget proposal to the offices involved containing specific data related for their finances in the beginning of the semester on or before the deadline set.</li>
              <li>A liquidation report must also be submitted at the end of the semester with the official receipts.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Page;
