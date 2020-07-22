import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Divider from '@material-ui/core/Divider';

import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Open\ Sans',
  },
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    width: 285,
    margin: 'auto',
    borderRadius: 0,
  },
  cardMedia: {
    height: 285,
    width: 285,
    margin: 'auto'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    padding: '20px 40px 30px',
    outline: 'none'
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  const departments = [
    {
      name: 'Department of Student Rights and Welfare',
      img: 'https://samahan-cdn.snry.xyz/STRAW.png',
      desc: <>
        <Typography>
          <b>Director: </b> Jyp Phyllis Galan 
        </Typography>
        <Typography>
          jpcgalan@addu.edu.ph
        </Typography>
        <Typography>
          <b>Assistant Director: </b> Brian Joseph Unabia
        </Typography>
        <Typography>
          bjmunabia@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          The SAMAHAN Students’ Rights and Welfare Department under the Office of the President is a special arm of the Central Board that takes initiatives in curating programs and projects that pursue the promotion of the rights and welfare of every Atenean. The StRAW Department aims to protect and defend each student’s rights and welfare that will enable progress both inside and outside the university.
        </Typography>
      </>
    },
    {
      name: 'Office of the Buklod Ambassador',
      img: 'https://samahan-cdn.snry.xyz/OBA.png',
      desc: <>
        <Typography>
          <b>Buklod Ambassador: </b> Trixy Marie Macaraeg
        </Typography>
        <Typography>
          tmamacaraeg@addu.edu.ph 
        </Typography>
        <Typography>
          <b>Deputy Buklod Ambassador: </b> James Raphael Lim
        </Typography>
        <Typography>
          jrelim@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          The Office of the Buklod Ambassador, under the Office of the President, endorses advocacies through collaborative efforts of the Buklod Atensita. The Buklod Atenista is the alliance of five Ateneo schools namely, Ateneo de Davao University, Ateneo de Manila University, Ateneo de Naga University, Ateneo de Zamboanga University, and Xavier University- Ateneo de Cagayan. The main purpose of this department is to provide a venue for individuals to voice out their ideas on student concerns and to generate common plans and visions for the different Ateneo universities, specifically on advocacy building among students.
        </Typography>
      </>
    },
    {
      name: 'Ecoteneo Student Unit',
      img: 'https://samahan-cdn.snry.xyz/ECOTEN2.png',
      desc: <>
        <Typography>
          <b>Director: </b> Nur-aine Jaizzah Isla
        </Typography>
        <Typography>
          njcisla@addu.edu.ph
        </Typography>
        <Typography>
          <b>Assistant Director: </b> Aiben Cotamora
        </Typography>
        <Typography>
          alcotamoara@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          The Ecoteneo Student Unit is a department under the Office of the President that specializes in advocacies that pertain to the environment and climate action. This department focuses on publicizing, promoting, and operating activities that will allow the students to invest in the well-being of our common home. In addition, the Ecoteneo Student Unit guides students through environmental campaigns and information drives. In an effort to reduce waste generation and lessen our carbon footprints, the Ecoteneo Student Unit also monitors all events to aid in achieving these goals.
        </Typography>
      </>
    },
    {
      name: 'Department of Campaigns and Advocacies',
      img: 'https://samahan-cdn.snry.xyz/SDCA.png',
      desc: <>
        <Typography>
          <b>Director: </b> Vincent Campos
        </Typography>
        <Typography>
          vdcampos@addu.edu.ph
        </Typography>
        <Typography>
          <b>Assistant Director: </b> Dianna Kyle Tagalog
        </Typography>
        <Typography>
          katagalog@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          The Department of Campaigns and Advocacies ensures the knowledge and actions of the students in realizing their social responsibilities as students and as citizens of this country. This department will take charge in materializing the priority advocacies of the central board through different activities and efforts throughout the university. The Department of Campaigns advocacies engages in communities outside the university, especially to the marginalized and the vulnerable. Supported with partnerships from UCEAC and the Aruppe Office of Social Formation, this department organizes sustainable programs and leads various social activities such as donations, relief drives, and much more.
        </Typography>
      </>
    },
    {
      name: 'Department of Systems Development',
      img: 'https://samahan-cdn.snry.xyz/SYSDEV.png',
      desc: <>
        <Typography>
          <b>Director: </b> Gabriel Paderna  
        </Typography>
        <Typography>
          gpaderna@addu.edu.ph  
        </Typography>
        <Typography>
          <b>Assistant Director: </b> Rudy Serna Jr.
        </Typography>
        <Typography>
          rfsernajr@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          The department of Systems and Development is responsible for designing and developing software in order to advance SAMAHAN’s plans of action more efficiently and effectively with the help of technology.
        </Typography>
      </>
    },
    {
      name: 'Department of Research and Development',
      img: 'https://samahan-cdn.snry.xyz/RD.png',
      desc: <>
        <Typography>
          <b>Director: </b> 
        </Typography>
        <Typography>

        </Typography>
        <Typography>
          <b>Assistant Director: </b> 
        </Typography>
        <Typography>
          
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          The SAMAHAN Research and Development department holds the responsibility for collecting, collating, and interpreting statistical data on various matters and concerns that surround the university. Adhering to the standard research protocols and methodologies, this department aims to publish findings for the enhancement and development of the Ateneo community.
        </Typography>
      </>
    },
    {
      name: 'Department of Communications',
      img: 'https://samahan-cdn.snry.xyz/COMMS.png',
      desc: <>
        <Typography>
          <b>Director: </b> Janine Dela Cruz
        </Typography>
        <Typography>
          jancdelacruz@addu.edu.ph
        </Typography>
        <Typography>
          <b>Assistant Director: </b> 
        </Typography>
        <Typography>
          
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          Under the Office of the Secretary-General, the department of SAMAHAN Communications is responsible of secretariat duties, student communication, information dissemination, and public affairs for the SAMAHAN community.
        </Typography>
      </>
    },
    {
      name: 'Ateneo SAMAHAN Productions',
      img: 'https://samahan-cdn.snry.xyz/MAIN.png',
      desc: <>
        <Typography>
          <b>Director: </b> Jacqueline Laurente
        </Typography>
        <Typography>
          jallaurente@addu.edu.ph
        </Typography>
        <Typography>
          <b>Assistant Director: </b> Minneth Bayarcal
        </Typography>
        <Typography>
          mgmbayarcal@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          Ateneo SAMAHAN Productions (ASP) Department’s primary responsibility is the strategic event planning and event management of any activity or event that the SAMAHAN will be conducting such as dialogue, fora, ceremonies, etc.
        </Typography>
      </>
    },
    {
      name: 'SAMAHAN Creative Team',
      img: 'https://samahan-cdn.snry.xyz/SCT.png',
      desc: <>
        <Typography>
          <b>Director: </b> Kenth Cervantes
        </Typography>
        <Typography>
          kwcervants@addu.edu.ph    
        </Typography>
        <Typography>
          <b>Assistant Director: </b> Allan John Garsuta
        </Typography>
        <Typography>
          ajegarsuta@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          The SAMAHAN Creative Team (SCT) are the official creative solutions committee of the SCB. This department is responsible in the creation of publicity materials, audio-visual productions, and creative documentation of SAMAHAN events.
        </Typography>
      </>
    },
    {
      name: 'Department of Logistics',
      img: 'https://samahan-cdn.snry.xyz/SAMAHAN-Logistics.png',
      desc: <>
        <Typography>
          <b>Director: </b> Jeffson Occidental
        </Typography>
        <Typography>
          jeftoccidental@addu.edu.ph
        </Typography>
        <Typography>
          <b>Assistant Director: </b> Alyssa Ashley Maturan
        </Typography>
        <Typography>
          aarmaturan@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          The Department of Logistics is in charge of the general operation in SAMAHAN from logistical works, procurement, and canvassing of materials. In addition, this department is also responsible for the supervision of supply and handles the storage and accessibility of items in the office.
        </Typography>
      </>
    },
    {
      name: 'Department of Sponsorships and Support',
      img: 'https://samahan-cdn.snry.xyz/SAMAHAN-SAS.png',
      desc: <>
        <Typography>
          <b>Director: </b> Genesis Angelo Villacorta
        </Typography>
        <Typography>
          gamvillacorta@addu.edu.ph  
        </Typography>
        <Typography>
          <b>Assistant Director: </b> Jie-ae Celine Lee
        </Typography>
        <Typography>
          jiecclee@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          The SAMAHAN Sponsorship and Support Department is the fundraising arm of the student body. Their responsibility is to create and maximize sources of funds by identifying potential sponsors and partners. This department also ensures connections with possible sponsors and partners by establishing strong relations with them. Through these protocols, the SAMAHAN is capable in effectively fulfilling its missions, goals, and projects every year.
        </Typography>
      </>
    },
    {
      name: 'Department of Internal Audit',
      img: 'https://samahan-cdn.snry.xyz/SAMAHAN-DIA.png',
      desc: <>
        <Typography>
          <b>Director: </b> Harris C. Tuyongan
        </Typography>
        <Typography>
          hctuyongan@addu.edu.ph 
        </Typography>
        <Typography>
          <b>Assistant Director: </b> Cindy Zunio
        </Typography>
        <Typography>
          cczunio@addu.edu.ph
        </Typography>
        <div style={{ height: 50 }} />
        <Typography>
          SAMAHAN Department of Internal Audit is the official auditing body of the SAMAHAN Central Board and the official tabulator of all SAMAHAN events. As this department is under the Office of the Treasurer, its main function includes assisting the SAMAHAN Treasurer in auditing liquidation reports submitted by all affiliates of the SAMAHAN Central Board. This department is also responsible for crafting fiscal policies and handling financial concerns.
        </Typography>
      </>
    }
  ]

  const [departmentModal, setDepartmentModal] = React.useState(null);

  return (
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader}>
        Departments
      </Typography>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        { departments.map((department) => {
          return (
            <Grid item sm={4} key={department.name}>
              <Card className={classes.cardRoot} elevation={0} variant="outlined">
                <CardActionArea onClick={() => setDepartmentModal(department.desc)}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={department.img}
                    title={department.name}
                  />
                  <Divider />
                  <CardContent>
                    <Typography style={{ fontSize: '1.2em', textAlign: 'center' }}>
                      <b>{department.name}</b>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Modal
        open={departmentModal !== null}
        onClose={() => setDepartmentModal(null)}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={departmentModal !== null}>
          <Card className={classes.modalPaper} elevation={0}>
            <CardContent>
              {departmentModal}
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" disableElevation onClick={() => setDepartmentModal(null)}>
                Close
              </Button>
            </CardActions>
          </Card>
        </Fade>
      </Modal>

    </>
  );
};

export default Page;
