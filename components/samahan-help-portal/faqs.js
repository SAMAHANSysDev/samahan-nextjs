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
    <Grid item sm={9}>
      <div className={classes.accordions}>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>Steps to get Free Microsoft 365</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ol>
                <li>Go to http://www.office.com/getOffice365</li>
                <li>Enter your AdDU email to the space provided.</li>
                <li>An email from microsoft will be sent to you. Log in to http://blueknights.addu.edu.ph using your AdDU email and password.</li>
                <li>Open the confirmation email sent by Microsoft and click the link. Fill up the needed information once the link opens.</li>
                <li>Download the installer for Word, Excel, Powerpoint, OneNote, and Outlook.</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>Purchase Discount From Addu Providers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ul>
                <li>Columbia Computer Center, Inc. Main Branch Palma Gil Street, Davao City (in front of Pasalubong Center) Tel (082) 2862388 or 09209011835</li>
                <li>You may order online thru COLUMBIA COMPUTER CENTER DAVAO (FB Page) at https://www.facebook.com/columbiacomputercenterdavao/</li>
                <li>iCenter Davao Stores:  iGadgetworld – SM Lanang – (082) 3272156 iCenter SM Ecoland – (082) 3210214 iCenter Abreeza  – (082) 3336742 iCenter Gmall  – (082) 2369572  </li>
              </ul>
              AdDU Student ID is needed to avail of the offer. For new students who have no official ID yet, a printed form of registration and ID from previous school will suffice as proof that they are students of ADDU.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>Acer Student Purchase Program</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ol>
                <li>Inquiries re: computer loans should be directed to the Finance Office thru: finance@addu.edu.ph </li>
                <li>Please use AdDU Email for this transaction. </li>
                <li>Other questions may be directed to Ms. Cherry Gamil of Acer thru: CHERRY.GAMIL@ACER.COM </li>
                <li>For more details, please check Fr. Toledo’s Message via AdDU Email.</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>How to activate G-Suite Account?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ol>
                <li>Take three pictures of yourself.</li>
                  <ul>
                    <li>Torso/upper body (includes head down to elbows) holding AdDU ID close to head</li>
                    <li>Closeup of face with AdDU ID close to face</li>
                    <li>Closeup of AdDU ID</li>
                  </ul>
                  Note : Make sure that the ID and the ID number is visible and legible on all three pictures. If AdDU ID is not available, a student may use a driver’s license, passport, voter’s ID or any proof for identification.
                
                <li>Send an email to gdsabaldan@addu.edu.ph and mtropenia@addu.edu.ph with the attached photos, complete name and course.</li>
                <li>Follow the specific instructions provided by them.</li>
              </ol>
              Note: Working hours of the personnel run from 8 AM to 5 PM.<br/>
              This office manages the Student Personal Accident Insurance, off-campus housing accreditation, the beadle system, the Culture and Arts Program, the Arrupe Hall and Martin Building, and Lost and Found items.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>How to enroll for summer online classes?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ol>
                <li>Clear all tagged obligations from previous semester by contacting concerned offices.</li>
                <li>Choose the schedule of classes of the courses that are required to be taken during the summer class which is reflected in SIS account.</li>
                <li>Pay online the required amount. Once payment is done, the student is tagged “enrolled” in SIS.</li>
                <li>Print or screenshot the schedule and wait for the start of semester online class.</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>How to pay online?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ol>
                <li>Go to your preferred online platform (i.e. BPI, BDO, PNB, Gcash, etc.) </li>
                <li>Open Bills Payment.</li>
                <li>
                  Input the amount and other required information. <br />
                  Note: Information must include student’name and ID number. Institution codes and AdDU’s account information can be found at the SIS.
                </li>
                <li>Confirm the transaction.</li>
              </ol>
              Note: Payment may reflect after one (1) banking day. For inquries, please message AdDU Finance on Facebook. All Finance Associates are available from 8:00AM to 5:00PM, Monday to Friday and 8:00AM to 12:00NN, Saturday except Sundays and Holidays.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>What is the annual QPI requirement per year level?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ul>
                <li>Incoming Second Year (At least 1.60)</li>
                <li>Incoming Third Year (At least 1.80)</li>
                <li>Incoming Fourth Year (At least 1.90)</li>
              </ul>
              Note: Annual QPI will be shown in the SIS after faculty’s submission of second semester final grades.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>How to process QPI Appeal/Probation?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ol>
                <li>Open the QPI Appeal Form available in the SIS account.</li>
                <li>
                  Fill in necessary information in the QPI Appeal Form and click the “Submit” button upon completion. <br />
                  Note: The University Standards Committee deliberates QPI Appeals endorsed by the Academic Vice President. If an application of a student for QPI Appeal has been approved for a probationary enrolment in his/her program, the Department Chairperson will be notified in his/her Administrator Information Management account. The Department Chairperson will advise the student of his/her maximum course load and list of courses to enroll in the following semester.
                </li>
                <li>A notification will appear in the SIS account. If approved, students can now enroll by following online enrollment procedures.</li>
                Note: A disapproved notification means dismissal from the university. The student may re-appeal to AVP by sending e-mail to vp.academics@addu.edu.ph.
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>How to Process Grade Appeal?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ol>
                <li>Send an email to the faculty member containing the complaint on the final grade received.</li>
                <li>If original grade needs to be changed, the faculty member will email grade appeal to standardscom@addu.edu.ph with the reason of changing the grade and an attachment of the copy of class record.</li>
                <li>If the appeal is approved by the University Standards Committee, the AVP will email the Registrar to implement a change of grade. A notification will be sent to both the faculty member and the student.</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>How to shift?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ol>
                <li>Open the Shifting Form available in the SIS account.</li>
                <li>Fill in the necessary information and click “Submit” button once completed.</li>
                <li>
                  Wait for the notification of approval from the current Department Chairperson and the Department Chairperson of the desired new program. The notice will appear in the SIS account. <br />
                  Note: If shifting application is approved, the student will be released by his/her Department Chairperson. The Department Chairperson of the new program is notified through the Administrator Information Management account and will create a new enrolment registration for the student. The Chairperson will also determine maximum course load and academic status of the student.
                </li>
                <li>The student may enroll following the online procedures once the notification of approval to shift is received.</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>Steps for Scholarship Application for School Year 2020-2021</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              For applicants applying for financial aid grant (GIA), proceed to the link: bit.ly/GIAApplication <br /><br />
              For applicants who graduated as valedictorian or salutatorian, proceed to the link: bit.ly/ValSalApplication <br /><br />
              Make sure to indicate your active email address and mobile number.  For further announcements, visit the Ateneo de Davao – College Admission and Aid on Facebook and the the Ateneo de Davao Scholars Society Page. <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>How to process Leave of Absence (LOA)?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              LOA is process by student who needs to temporarily discontinue his/her enrollment.
              <ol>
                <li>Open the LOA form available in the SIS account.</li>
                <li>Fill in necessary information and click “Submit” button once the form is completed.</li>
                <li>Wait for the notification from the Finance Office in the SIS account. Once cleared by the finance office, a notification of approval from the Admission Director will be received in the SIS account.</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>How to process Reinstatement?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              A student whose approved LOA has already been completed needs to be reinstated in the Undergraduate Programs.
              <ol>
                <li>Open the Ateneo de Davao University website and downloadthe Reinstatement Form.</li>
                <li>Fill-in the necessary information required in the Reinstatement Form and click the “Submit” button once completed.</li>
                <li>Wait for the notification from the Director of the Admission and Aid Office to proceed for an enrolment.</li>
                <li>Open the re-activated SIS account and proceed to enrollment following online procedures.</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>Incoming First Year Enrollment Procedures</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              Incoming freshmen from AdDU SHS. Check your email at http://blueknights.addu.edu.ph for your applicant ID. Use your WiFi account to log in.<br />
              Non-AdDU SHS Applicants who have not taken the entrance exam. Applicants need to fill out the Admission online application form at http://bit.ly/AdDUapplicationform<br />
              For Non-AdDU who have taken the Entrance exam, kindly monitor your email address.<br />
              <ol>
                <li>MIS or Admissions send the NOA with applicant ID thru email.</li>
                <li>Applicants must complete information via https://enlist.addu.edu.ph</li>
                <li>An email is sent to the newly-accepted student advising them that their registration was already processed with the list of courses to be taken, their barcode, amount to pay, and instructions on how to pay.</li>
                <li>Applicant pays through accredited channels.</li>
                <li>An email will be sent as an acknowledgement of payment and informing the applicant they are now officially enrolled.</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1" className={classes.heading}>Changing of Courses (Incoming First Years)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" className={classes.wordWrap}>
              <ol>
                <li>Send an email to the admissions office through admissions@addu.edu.ph with the subject name: Change Course. </li>
                <li>Admissions changes the preferred program through the AIMS and the system will change the registration program.</li>
                <li>A confirmation email will be sent to the student.</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  );
};

export default Page;
