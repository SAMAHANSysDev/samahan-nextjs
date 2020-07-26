import React from "react";
import { makeStyles } from '@material-ui/core/styles';

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

import advocacies from 'data/samahan/advocacies';

const useStyles = makeStyles((theme) => ({
  
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px 40px 30px',
    width: '80%',
    maxHeight: 500,
    overflow: 'scroll',
    outline: 'none'
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  const [advocasix, setAdvocasix] = React.useState(null);

  return (
    <>
      <Typography variant="h3" component="h4" style={{ marginBottom: 20 }}>
        ADVOCA<font className={classes.adduBlue}>SIX</font>
      </Typography>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(0)}>
              <img src={advocacies[0].img} className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(1)}>
              <img src={advocacies[1].img} className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(2)}>
              <img src={advocacies[2].img} className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(3)}>
              <img src={advocacies[3].img} className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(4)}>
              <img src={advocacies[4].img} className={classes.cardMedia} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea onClick={() => setAdvocasix(5)}>
              <img src={advocacies[5].img} className={classes.cardMedia} />
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
            { advocasix !== null ?
              <CardContent>
                <Typography variant="h3" component="h4" style={{ marginBottom: 20 }}>
                  {advocacies[advocasix].name}
                </Typography>
                {advocacies[advocasix].desc.map((info) => {
                  return (
                    <Typography>{info}</Typography>
                  );
                })}
              </CardContent> : null
            }
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