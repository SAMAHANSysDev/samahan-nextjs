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
import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  adduBlue: {
    color: theme.palette.primary.main
  },
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    minWidth: 275,
    borderRadius: 0,
  },
  cardMedia: {
    height: 'auto',
    width: '100%'
  },
  dividerBoardMembers: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
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

  const [advocasix, setAdvocasix] = React.useState(null);

  const advocacies = [
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
        Climate Action
      </Typography>
      <Typography>The SAMAHAN believes that investing the right programs to the youth today is a significant contribution to nation building. The youth today is open, engaged, talented and skillful. With this, the SAMAHAN shall focus on creating platforms to enrich these attribute, and empower them to not only know what they can do, but also develop he sense of urgency to act now. </Typography>
      <Typography>The SAMAHAN shall create platforms to encourage the youth to participate and take leadership wherever it is needed. It shall contribute in developing the students’ 21st Century skills to embody the spirituality of St. Ignatius of Loyola by being men and women for others and be active contributors to the common good.</Typography>
    </>,
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
        Mental Health
      </Typography>
      <Typography>As a transition period between education and employment, tertiary education becomes a defining moment for students on developing their capacity to respond to the expectations of society. This leads to the exertion of more effort to meet or even exceed academic expectations, and be mentally affected by various external factors. Lacking the means and support in coping up with the increasing pressure students have to take, this increases stress to the students, leading to anxiety possibly even depression.</Typography>
      <Typography>As a student government, the SAMAHAN takes priority over the welfare of the students. Partnering with key offices within the University, it shall exert great effort in implementing programs that contribute to a student’s flexibility, adaptability, and resilience in tackling the increasing challenges in both the present and the future.</Typography>
    </>,
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
        Rural Poor
      </Typography>
      <Typography>Rural economy and political systems are some of the factors that give rise to the perrenial problem of poverty in the country. With this, there has been a noticeable unequal wealth production and distribution between the urban and rural areas. </Typography>
      <Typography>As the student government, the SAMAHAN shall do its part in shedding light on this problem to the community and highlight how this problem creates negative impact to vulnerable sectors. It must start dialogues and discussions that exchange meaningful ideas pertaining the issue, but most importantly create platforms that enable Ateneans to know how they can contribute to address the problem.</Typography>
    </>,
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
        Good Governance
      </Typography>
      <Typography>The current administration of President Rodrigo Duterte has, as previous ones had, been filled with problems and solutions that continues to influence the lives of the Filipino people. The Filipinos are observant to how our leaders in the government’s three branches, from local to national, are responding to the problems that has been existing for years. The response to the pandemic and the administration’s big projects such as the Build, Build, Build program and the Rice Tarrification Law need to be scrutinized and monitored through discussions focused to them. It shall maximize the use of the internet to fact-check information, disseminate the truth, and form its well-informed stand.</Typography>
      <Typography>As we approach closer to the National Elections, the SAMAHAN will make sure to keep watch as the national government continues to prove itself as a model of good governance. The SAMAHAN will continue to assess the leaders of the Philippine government and promote others to do the same, for the sake of accountability and good governance.</Typography>
    </>,
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
        Youth Empowerment and Leadership
      </Typography>
      <Typography>The SAMAHAN believes that investing the right programs to the youth today is a significant contribution to nation building. The youth today is open, engaged, talented and skillful. With this, the SAMAHAN shall focus on creating platforms to enrich these attribute, and empower them to not only know what they can do, but also develop he sense of urgency to act now. </Typography>
      <Typography>The SAMAHAN shall create platforms to encourage the youth to participate and take leadership wherever it is needed. It shall contribute in developing the students’ 21st Century skills to embody the spirituality of St. Ignatius of Loyola by being men and women for others and be active contributors to the common good.</Typography>
    </>,
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
        Peacebuilding
      </Typography>
      <Typography>More than two years have passed since the Battle of Marawi, one of Mindanao’s greatest conflicts to date, ended. With the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM) already in operation for more than a year now, the progress of peacebuilding in Mindanao has gotten off to a good start. Although the peace process is currently on the right track, there remains the presence of parties that take up arms as a means to achieving their goals, risking the lives of the populace.</Typography>
      <Typography>The SAMAHAN continues to promote peace in Mindanao through initiatives such as its flagship event Mulat Mindanao. As part of a Filipino university, it recognizes and responds to the importance of cultivating AdDU sui generis leaders that will serve Mindanao and help it achieve long-lasting peace. It shall continue to start conversations, and urge more Ateneans to contribute to the discourse.</Typography>
    </>
  ]

  return (
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20, fontSize: 'calc(20px + 1.5vw)' }}>
        ADVOCA<font className={classes.adduBlue}>SIX</font>
      </Typography>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(0)}>
              <img src="https://samahan-cdn.snry.xyz/CA2-scaled.jpg" className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(1)}>
              <img src="https://samahan-cdn.snry.xyz/MH1-scaled.jpg" className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(2)}>
              <img src="https://samahan-cdn.snry.xyz/RP-scaled.jpg" className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(3)}>
              <img src="https://samahan-cdn.snry.xyz/GG-scaled.jpg" className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(4)}>
              <img src="https://samahan-cdn.snry.xyz/YL-scaled.jpg" className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(5)}>
              <img src="https://samahan-cdn.snry.xyz/P-scaled.jpg" className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Modal
        open={advocasix !== null}
        onClose={() => setAdvocasix(null)}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
        <Fade in={advocasix !== null}>
          <Card className={classes.modalPaper} elevation={0}>
            <CardContent>
              {advocacies[advocasix]}
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" disableElevation onClick={() => setAdvocasix(null)}>
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