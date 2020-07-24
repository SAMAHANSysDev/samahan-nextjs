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
          <Typography variant="body1" className={classes.heading}>Martin Hall Reservation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div" className={classes.wordWrap}>
            <ol>
              <li>Submit a letter of intent addressed to Mr. Bemi O. Garcia, College Sports Coordinator, containing the request for reservation. Along with this letter is the approved concept paper of the event.</li>
              <li>Upon approval, the Athletics Office will provide a form to be filled up containing the details of reservation. The Athletics Office is located in the 4 th floor of the Martin Hall.</li>
              <li>Create a letter addressed to Suzanne Marie Doromal, the Vice President for Community Center of the First Companions Operations. This letter contains the equipment requested, venue, and the date and time.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="body1" className={classes.heading}>Finster Auditorium Reservation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div" className={classes.wordWrap}>
            <ol>
              <li>Go to the Physical Plant Office (PPO) to check for the availability of the venue on the desired date and time of the planned event.</li>
              <li>Write a letter addressed to Father Joel Tabora, SJ, President of the Ateneo de Davao, containing the details of the event. Attach with it the approved concept paper of the event.</li>
              <li>Submit the letter to the Office of the President located in the ground floor of the Canisius Building.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="body1" className={classes.heading}>Arrupe Hall Reservation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div" className={classes.wordWrap}>
            <ol>
              <li>Submit a letter of Arrupe Hall Reservation request to Mrs. Theresa Salaver-Eliab, the Director of the Office of Student Affairs (OSA) with the approved concept paper.</li>
              <li>Upon approval, the office will provide a form to be filled up with the details of the reservation and event.</li>
              <li>Proceed to sending a letter to the Vice President for Community Center of the First Companions Operations for the request of equipment.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="body1" className={classes.heading}>Rodriguez Hall Reservation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div" className={classes.wordWrap}>
            <ol>
              <li>Create a letter addressed to Suzanne Marie Doromal, the Vice President for Community Center of the First Companions Operations containing the request to reserve the Rodriguez Hall.</li>
              <li>Attach with the letter the approved concept paper of the event and the floor plan.</li>
              <li>Submit the letter to Admin’s Office in the 4 th Floor of Martin Building, near the stage.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="body1" className={classes.heading}>Training Room, 8th Floor Reservation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div" className={classes.wordWrap}>
            <ol>
              <li>Submit a letter of intent to Mr. Mark Paul Samante, the Chairperson of the University Community Engagement and Advocacy Council (UCEAC). The UCEAC is located in the 8th Floor of the CCFC Building.</li>
              <li>Attach with this letter the approved concept paper of the event.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="body1" className={classes.heading}>Classroom Reservation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div" className={classes.wordWrap}>
            <ol>
              <li>If the time of use is during the activity period, proceed to the Office of the Student Affairs (OSA). You may choose the available rooms to choose from, and fill up the form provided by them.</li>
              <li>If the time of use is outside the activity period time, the reservation must be done with the Physical Plant Office (PPO).</li>
              <li>Proceed to the Registrar’s Office and inquire about the available rooms during the schedule. The Registrar’s Office will give a paper once they approve the reservation. The Registrar’s Office is located in the ground Floor of the Canisius Building.</li>
              <li>Go to the PPO and fill up the form provided by the office. The PPO’s office is located in the ground floor of the Jubillee building.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="body1" className={classes.heading}>Conference Room Reservation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div" className={classes.wordWrap}>
            <ol>
              <li>Go to the 8th Floor of the CCFC Building, and ask for the reservation form.</li>
              <li>Fill up the forms needed and complete the signatories.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Page;
