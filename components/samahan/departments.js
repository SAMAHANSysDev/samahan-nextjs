import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMediaWP from 'components/card-media-wp';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Divider from '@material-ui/core/Divider';

import CardActions from "@material-ui/core/CardActions";
import Button from 'components/Button';

const useStyles = makeStyles((theme) => ({
  
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

const Page = ({ depts: departments }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  const [currentDepartment, setCurrentDepartment] = React.useState(null);

  return (
    <>
      <Typography variant="h3" component="h4">
        Departments
      </Typography>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        { departments.map((department) => {
          return (
            <Grid item sm={4} key={department.acf.name}>
              <Card className={classes.cardRoot} elevation={0} variant="outlined">
                <CardActionArea onClick={() => setCurrentDepartment(department)}>
                  <CardMediaWP
                    className={classes.cardMedia}
                    imageId={department.featured_media}
                    title={department.acf.name}
                  />
                  <Divider />
                  <CardContent>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      <b>{department.acf.name}</b>
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
                <Typography variant="h4" style={{ marginBottom: 10 }}>{currentDepartment.acf.name}</Typography>
                { currentDepartment.acf.first_title_name ?
                  <>
                    <Typography>
                      <b>{currentDepartment.acf.first_title}: </b> {currentDepartment.acf.first_title_name}
                    </Typography>
                    <Typography>
                      {currentDepartment.acf.first_title_email}
                    </Typography>
                  </> : null
                }
                { currentDepartment.acf.second_title_name ?
                  <>
                    <Typography>
                      <b>{currentDepartment.acf.second_title}: </b> {currentDepartment.acf.second_title_name}
                    </Typography>
                    <Typography>
                      {currentDepartment.acf.second_title_email}
                    </Typography>
                  </> : null
                }
                <div style={{ height: 50 }} />
                <Typography dangerouslySetInnerHTML={{ __html: currentDepartment.acf.description }} />
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
