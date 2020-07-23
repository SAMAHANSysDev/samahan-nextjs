import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: 15,
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Request for Equipment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.wordWrap}>
            <ol>
              <li>Create a letter addressed to Suzanne Marie Doromal, the Vice President for Community Center of the First Companions Operations containing the intent of requesting equipment.</li>
              <li>Include in the letter the list of equipment and the quantity each.</li>
              <li>Attach with the letter the approved concept paper and the floor plan.</li>
            </ol>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Request for Entry of Outsiders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.wordWrap}>
            <ol>
              <li>Create a letter addressed to Suzanne Marie Doromal, the Vice President for Community Center of the First Companions Operations containing the intent of requesting for entry.</li>
              <li>Include the names of the outsiders. Attach with the letter the approved concept paper and the venue request.</li>
            </ol>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Request for LED</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.wordWrap}>
            <ol>
              <li>Submit a letter to Mr. Bernie Jereza, the Director of the Institutional Communications and Promotions (iCOMMP) containing the intent of requesting the LED.</li>
              <li>Attach with the letter the approved concept paper and the floor plan. The letter may be sent through email or may be submitted to the iCOMMP office at the 3rd Floor of the CCFC Building.</li>
            </ol>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Request for LFD</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.wordWrap}>
            <ol>
              <li>Submit a letter to Ms. Fretsie A. Fajardo, the Director of the University Libraries and AV Center containing the intent of requesting for LFD.</li>
              <li>Attach with the letter the approved concept paper and the floor plan. The letter may be submitted to the AVR Office at the 3 rd Floor of Weiman Hall.</li>
            </ol>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Request for Stilts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.wordWrap}>
            <ol>
              <li>Submit a letter to Engr. Florian Remolino, Director of the University Physical Plant Office (PPO) containing the details of the events and the purpose of borrowing the stilts.</li>
              <li>Attached with the letter the approved concept paper and the floor plan. The PPO’s office is located in the ground floor of the Jubillee building.</li>
            </ol>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Request for Parent's Consents</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.wordWrap}>
            <ol>
              <li>Submit a letter of request to Mrs. Theresa Salaver-Eliab, the Director of the Office of Student Affairs (OSA).</li>
              <li>Attach all the names of students involved as well as the approved concept paper of the activity.</li>
            </ol>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Request for Ingress</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.wordWrap}>
            <ol>
              <li>Create a letter addressed to Suzanne Marie Doromal, the Vice President for Community Center of the First Companions Operations.</li>
              <li>Include in the letter the list of equipment and the names of outsiders who will enter.</li>
              <li>Attach with the letter the approved concept paper and the floor plan.</li>
            </ol>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Request for Overtime</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.wordWrap}>
            <ol>
              <li>Submit a letter of request to Mrs. Theresa Salaver-Eliab, the Director of the Office of Student Affairs (OSA).</li>
              <li>Indicate in the letter all the students involved, the activity and its schedule.</li>
            </ol>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Request for Pink Slips</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.wordWrap}>
            <ol>
              <li>Submit a letter of request to Mrs. Theresa Salaver-Eliab, the Director of the Office of Student Affairs (OSA).</li>
              <li>Indicate in the letter all the students involved, the activity and its schedule.</li>
            </ol>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Page;
