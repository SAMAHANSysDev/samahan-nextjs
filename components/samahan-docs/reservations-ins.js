import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

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

const Page = ({ docs }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.accordions}>
      { docs.map((doc) => (
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>{doc.acf.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap} dangerouslySetInnerHTML={{ __html: doc.acf.instructions }} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Page;
