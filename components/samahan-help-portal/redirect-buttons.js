import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';

import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  cardRoot: {
    minWidth: 200,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  }
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={2} alignItems="center" justify="center" className={classes.contentContainer}>
      <Grid item sm>
        <Card className={classes.faqCard} variant="outlined">
          <CardActionArea disabled>
            <CardContent>
              <SearchOutlinedIcon style={{ fontSize: 'calc(40px + 4vw)' }} /><br />
              <Typography variant="h1" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(20px + 1vw)' }}>
                FAQs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea onClick={() => window.open('http://tiny.cc/Finance20', '_blank')}>
            <CardContent>
              <AttachMoneyOutlinedIcon style={{ fontSize: 'calc(40px + 4vw)' }} /><br />
              <Typography variant="h1" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(20px + 1vw)' }}>
                Finance
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea onClick={() => window.open('http://tiny.cc/MIS20', '_blank')}>
            <CardContent>
              <InfoOutlinedIcon style={{ fontSize: 'calc(40px + 4vw)' }} /><br />
              <Typography variant="h1" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(20px + 1vw)' }}>
                M.I.S.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea onClick={() => window.open('http://tiny.cc/Admissions20', '_blank')}>
            <CardContent>
              <AssignmentIndOutlinedIcon style={{ fontSize: 'calc(40px + 4vw)' }} /><br />
              <Typography variant="h1" component="h2" style={{ lineHeight: '1.5em', fontSize: 'calc(20px + 1vw)' }}>
                Admissions
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
