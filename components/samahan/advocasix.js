import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F2F3F4',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '100%'
  },
}));

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    '&:focus': {
      opacity: 1,
    },
    minWidth: '100%',
    width: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem'
  },
}))((props) => <Tab disableRipple {...props} />);

export default function VerticalTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item md>
          <StyledTabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <StyledTab label={
              <Typography variant="h3">
                <>
                  <span style={{ color: theme.palette.primary.main }}>ADVOCA</span><span style={{ color: '#2D8AEA' }}>SIX</span>
                </>
              </Typography>
            } {...a11yProps(0)} />
            <StyledTab label={
              <Typography variant={value === 1 ? 'h5' : 'h6'} style={{ color: value === 1 ? theme.palette.primary.main : '#2D8AEA' }}>
              Climate Action
              </Typography>
            } {...a11yProps(1)} />
            <StyledTab label={
              <Typography variant={value === 2 ? 'h5' : 'h6'} style={{ color: value === 2 ? theme.palette.primary.main : '#2D8AEA' }}>
                Good Governance
              </Typography>
            } {...a11yProps(2)} />
            <StyledTab label={
              <Typography variant={value === 3 ? 'h5' : 'h6'} style={{ color: value === 3 ? theme.palette.primary.main : '#2D8AEA' }}>
                Youth Empowerment and Leadership
              </Typography>
            } {...a11yProps(3)} />
            <StyledTab label={
              <Typography variant={value === 4 ? 'h5' : 'h6'} style={{ color: value === 4 ? theme.palette.primary.main : '#2D8AEA' }}>
                Children and Women's Rights
              </Typography>
            } {...a11yProps(4)} />
            <StyledTab label={
              <Typography variant={value === 5 ? 'h5' : 'h6'} style={{ color: value === 5 ? theme.palette.primary.main : '#2D8AEA' }}>
                Technology Democratization
              </Typography>
            } {...a11yProps(5)} />
            <StyledTab label={
              <Typography variant={value === 6 ? 'h5' : 'h6'} style={{ color: value === 6 ? theme.palette.primary.main : '#2D8AEA' }}>
                Sexual Education
              </Typography>
            } {...a11yProps(6)} />
          </StyledTabs>
        </Grid>
        <Grid item md={8} style={{ color: theme.palette.primary.main }}>
          <TabPanel value={value} index={0}>
            The Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao, as a Jesuit, Filipino, and Mindanaoan autonomous student government, hereby champions six pillar advocacies in owning the future of Academic Year 2021-2022: 
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
