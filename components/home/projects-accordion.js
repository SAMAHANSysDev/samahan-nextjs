import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Button from 'components/Button';

const Accordion = withStyles({
  root: {
    border: '0',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    marginBottom: -1,
    color: '#2D8AEA'
  },
  expanded: {
    color: theme.palette.primary.main
  },
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(4),
    color: theme.palette.primary.main
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant={expanded === 'panel1' ? 'h4' : 'h6'}>1.&nbsp;&nbsp;SAMAHAN Alert</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography>
                We will make sure that all information will be received by all Ateneans. We will continue maximizing text messaging to reach the student body, with the assurance that all our social media accounts will become more active in answering the questions of the student body.
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" disableElevation>Learn More</Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant={expanded === 'panel2' ? 'h4' : 'h6'}>2.&nbsp;&nbsp;SAMAHAN Para sa Pinas 2022</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography>
                This initiative Aims to partner with various university offices through the UCEAC and Blue Vote to increase voter engagement and awareness. The advocacy aims to expand dialogue to outside universities and listen to fellow Mindanaoans.
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" disableElevation>Learn More</Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant={expanded === 'panel3' ? 'h4' : 'h6'}>3.&nbsp;&nbsp;SAMAHAN Budget Live Tracker</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant={expanded === 'panel4' ? 'h4' : 'h6'}>4.&nbsp;&nbsp;SAMAHAN COVID Tracker</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
