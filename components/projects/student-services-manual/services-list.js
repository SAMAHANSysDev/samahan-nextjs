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
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body1" className={classes.heading}>Office of Student Affairs</Typography>
          </AccordionSummary>
          <AccordionDetails><div>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Office of Student Affairs (OSA) helps create and maintain a healthy and student-friendly campus and an academic community that fosters the social, emotional, physical, spiritual, and intellectual and leadership development of students. </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>This office manages the Student Personal Accident Insurance, off-campus housing accreditation, the beadle system, the Culture and Arts Program, the Arrupe Hall and Martin Building, and Lost and Found items.</Typography>
          </div></AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Admissions and Aid Offices</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Admission and Aid Office is in charge of student recruitment and career guidance, admission of College students, and processing of scholarship applications. </Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>This office offers Recruitment and Career Guidance as it maintains linkages and networks with feeder schools and other institutions. The office also facilitates applications for the taking of the Qualifying Examination for Ateneo de Davao University College (QEAC) and also supervises the admission of all new students. This office is responsible for processing scholarship applications.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Clinic</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Ateneo de Davao University Clinic is concerned with the holistic well-being of students and employees. It ensures a health program that is comprehensive and coordinated. It provides medical and dental services directed at diseases that are preventable, immediate first aid on emergency situations, and initial treatment for illnesses that may affect students and employees inside the campus. </Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>This office offers medical services such as an annual physical examination, consultation and treatment for acute illnesses whether medical or surgical, issuance of medical certificate for University-related activities and programs, and advocacy and preventive activities.</Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Clinic also provides dental services such as an annual dental examination, consultations and prescription of medications on patients with toothaches and oral swellings, Dental prophylaxis from Monday to Friday, Fluoride treatment for patients with hypersensitive teeth, and tightening of loose removable dentures.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Food Court and Commercial Spaces Offices</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Food Court and Commercial Spaces Office manage the food courts, commercial spaces, agricultural holdings, and other income-generating installations and projects of the University. The Office operates for the primary purpose of securing University funds to support its scholarship program for economically disadvantaged but deserving students.</Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>This office offers services such as assurance of meal quality at food outlets on the campus and providing free internet access (wi-fi) to qualified students, faculty and staff in the food court area.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Library</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Ateneo de Davao University Library, in support of the University’s mission, strives to provide access to adequate, updated, organized, and varied formats of information resources and innovative services to meet the academic and cultural needs and the research endeavors of the University.</Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The services and facilities include automated borrowing transactions, Online Public Access Catalog (OPAC), off-campus access to electronic resources, e-bulletin system, document delivery, interlibrary loans, scanning and photocopying services, air-conditioned reading areas, discussion rooms, laptop stations, drinking fountains, vending machines, and restrooms in each floor of the Library. The Library installs security gates to safeguard library materials from being taken out without proper withdrawal. CCTV cameras are fully-operational to provide the utmost security and safety to the community of users.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Audio-Visual Center</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Audio-Visual Center supports the University programs and activities. It aims to provide a wide range of communication learning opportunities to students through the use of audio-visual instructional and educational materials and equipment.</Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The services and facilities include automated borrowing transactions, computerized reservation systems, video walls/LFD sets provision, e-bulletin system, pre-view room, and viewing rooms complete with audio-visual equipment and modern acoustic and lighting system.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>University Information Technology Office</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The University Information Technology Office (UITO) is tasked with the planning for, and the implementation, administration, and maintenance of the information technology infrastructure of the University and the training of its users. The UITO also oversees the University’s Internet connectivity.</Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The UITO consists of three offices, namely; Management Information Services (MIS), Technical Services Office (TSO), and Information Technology Training Services Office (IT-TSO).</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>College Guidance Office</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Ateneo College Guidance Center stands as a contributing, supporting, and essential service unit of the university. Its programs and services are designed to provide for the developmental needs of the students. </Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The services available are Individual Counseling, One-on-one interaction between the counselor and student; considered to be the heart/core of the Guidance Program to promote self-knowledge, self-understanding, and self-growth. This is either counselor-initiated, can do through walk-ins, or set through an appointment. The service is available during working days.</Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>Information Service involves providing students with substantial knowledge of educational, vocational, and personal-social opportunities from school and community resources, in adherence to the idea that intelligent decisions are data-based. This is available through thematic bulletin boards or brochures.</Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>Group Guidance refers to activities that focus on providing information/or experiences through planned and organized group activities. This is scheduled by the College Guidance Center and can be done once or twice per class either in the 1st or 2nd semester during activity period.</Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>Career Guidance attempts to dispense career information, provision of activities to enhance self-awareness, career planning sessions. This is scheduled once either in the 1st or 2nd semester during activity period. </Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>Referral Services involves the receiving and providing for appropriate forms of intervention to a client who has been endorsed by significant others and/or professionals who may not have the time, competence, or inclination to administer or perform intervention themselves.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>College Campus Ministry Office</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The College Campus Ministry Office (CaMin) aims to empower the Ateneo community as a family of believers through the spiritual and religious formation and the promotion of faith that does justice rooted in Ignatian spirituality. CaMin also aims to help form student leaders to have integrity and social responsibility and to ensure that the University pursues the spiritual and religious aspects of the Vision and Mission by facilitating the faith development of its Catholic members and by sustaining the genuine Christian community in the University through the implementation of spiritually-oriented programs and activities. CaMin offers faith development programs and spiritual formations.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Arrupe Office of Social Formation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Arrupe Office of Social Formation (ARRUPE) is the arm of the University responsible for developing students and faculty to be leaders in service of the marginalized and the vulnerable, in the service of the faith and promotion of justice, following the example of Christ and appropriating the spirituality of St. Ignatius.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Physical Plant Office</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Physical Plant Office is in charge of safety, security, maintenance, sanitation, waste management of school halls, buildings, grounds, and facilities in various campuses of the Ateneo de Davao University. The office is also in charge of supervising the construction of new facilities and amenities. It keeps an up-to-date inventory of all equipment, furniture, machinery, and vehicles of the University. Services offered include locker rentals, room utilization, and use of motor vehicles.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Athletics Office</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Athletics Office provides administrative direction and leadership for all intercollegiate intramurals and all recreational programs as well as physical fitness activities of the University. It supervises Sports Coordinators, coaches, and the Athletic Staff responsible for ensuring compliance with all University athletic regulations, University faculty, and student manuals. It also coordinates with the College, High School, and Grade School officials for successful University athletic programs.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>College Bookstore</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The College Bookstore was created to give students a knowledge base through books. To aid students in their quest for excellence, the Bookstore offers direct access to books at affordable prices.</Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The College Bookstore purchases and provides textbooks to students as requested by academic departments every semester and summer. Textbooks are either for sale or for rent. Students can purchase books for sale at a price lower or the same as that prevailing in the market. Students can also rent books for use during the semester. Rented books are due to be returned a week before the final examinations. Students who intend to return the books after the final examination week should fill out a retention agreement with the College Bookstore.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Post Office</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Post Office accepts letters and parcels for conveyance by mail. It is open from 8:00 AM to 5:00 PM daily except on Saturdays and Sundays.</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>Institutional Communications and Promotions Office (iCOMMP)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>The Institutional Communications and Promotions (from hereon known as iCOMMP) is an office under the Office of the President that caters to the needs of the university to produce multimedia collaterals to promote its core values as well as its advocacies. </Typography>
              <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>This office works with other offices and individuals to create their needs such as videos, logos, and other promotional materials</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  );
};

export default Page;
