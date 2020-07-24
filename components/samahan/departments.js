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

import departments from '../../data/samahan/departments';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Montserrat',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px 40px 30px',
    width: '80%',
    overflow: 'scroll',
    maxHeight: 500,
    outline: 'none'
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  const [currentDepartment, setCurrentDepartment] = React.useState(null);

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
                <CardActionArea onClick={() => setCurrentDepartment(department)}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={department.img}
                    title={department.name}
                  />
                  <Divider />
                  <CardContent>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
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
        open={currentDepartment !== null}
        onClose={() => setCurrentDepartment(null)}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={currentDepartment !== null}>
          <Card className={classes.modalPaper} elevation={0}>
            { currentDepartment ?
              <CardContent>
                <Typography variant="h4" style={{ marginBottom: 10 }}>{currentDepartment.name}</Typography>
                { currentDepartment.pos1.name ?
                  <>
                    <Typography>
                      <b>{currentDepartment.pos1.title}: </b> {currentDepartment.pos1.name}
                    </Typography>
                    <Typography>
                      {currentDepartment.pos1.email}
                    </Typography>
                  </> : null
                }
                { currentDepartment.pos2.name ?
                  <>
                    <Typography>
                      <b>{currentDepartment.pos2.title}: </b> {currentDepartment.pos2.name}
                    </Typography>
                    <Typography>
                      {currentDepartment.pos2.email}
                    </Typography>
                  </> : null
                }
                <div style={{ height: 50 }} />
                <Typography>
                  {currentDepartment.desc}
                </Typography>
              </CardContent> : null
            }
            <CardActions>
              <Button variant="contained" color="primary" disableElevation onClick={() => setCurrentDepartment(null)}>
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
