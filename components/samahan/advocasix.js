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
            <Typography style={{ marginBottom: '2rem' }}>Amid a public health crisis and the negative impacts brought by environmental degradation, the clamor for climate action becomes more relevant than ever. There arises a great need for several sectors of society to centralize their collective efforts in bringing the issue of climate change into public discourse and mobilize concrete plans to ensure environmental sustainability and better preparedness in the face of disasters, calamities, and pandemics. </Typography>
            <Typography>Led by the Ecoteneo Student Unit, the SAMAHAN shall amplify its spearheading initiatives geared towards promoting climate education, sustainable lifestyle, and proactive environmental movements. As a model supreme student government, it envisions to own the future where every individual is not only equipped with the knowledge about the environment but is also empowered to fight for climate justice by going back on what is organic — a future where we and the succeeding generations thrive in a greener world. </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography style={{ marginBottom: '2rem' }}>The Philippines has experienced changes for the past five years under the current administration of President Rodrigo Duterte in several dimensions, including the aspect of peacebuilding through the establishment of the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM). While the peace process is off to a good start, systemic issues like social inequality and extreme poverty remain threats to Filipino welfare, especially amid a public health emergency and economic decline. </Typography>
            <Typography>Now more than ever, the SAMAHAN envisions to own the future where the government, composed with dignified, competent, and sincere leaders, and the citizens work hand-in-hand in journeying towards a better Philippines, where peace reigns amidst ideological differences, and with special concern to the underprivileged and the rural poor. As the 2022 National Elections draw near, the SAMAHAN shall spearhead platforms in magnifying the call to elect rightful leaders who will truly represent the common good, anchored on our collective desire for good governance.</Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography style={{ marginBottom: '2rem' }}>There is great hope in the youth’s innovative mind, creative spirit, and unparalleled vitality to solve society’s most perennial issues. Considering the youth’s innate potential, the SAMAHAN, as an autonomous student government, remains dedicated to empowering the youth to become catalysts of change for nation-building. In the face of the world’s systemic issues, youth empowerment and leadership become relevant in shaping our country’s direction many years from now.  After all, the youth today are the leaders of tomorrow. </Typography>
            <Typography>In line with this, the SAMAHAN remains fervent and steadfast in providing safe spaces for the youth to lead and serve the country from micro- to macro-scale initiatives. It seeks to own the future where the youth are longer downplayed by their inherent impulsiveness and lack of experience but are instead given opportunities to develop holistically in becoming men and women for others, for Mindanao, for the country — a future where we are not just dubbed to be the “hope of the country,” but also live up in becoming worthy of such a recognition. </Typography>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Typography style={{ marginBottom: '2rem' }}>The growing social divide has marginalized the rights of women and children since the dawn of patriarchy — inequitable employment opportunities, delimiting gender roles, unsatisfied basic children’s needs. With the prevalence of extreme poverty and inaccessibility of quality education, women still get mistreated as the weaker, inferior sex, and the subsequent undermining of children’s rights speaks volumes about inequality’s systemic problem. Being part of the underrepresented sectors in public discourse, there arises a need to challenge the status quo and hold the rights of women and children to be of equal value as that of men. </Typography>
            <Typography>The SAMAHAN acknowledges this painful truth and remains committed in its advocacy to uphold the rights of women and children through the initiation of projects that empower these sectors in collaboration with organizations inside and outside the university. It aims to own the future where men, women, and children can stand as equals, where no woman will feel less of a person because of who she is, and where no child will be deprived of his or her basic physiological, mental, and emotional needs. </Typography>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Typography style={{ marginBottom: '2rem' }}>The advent of technology has revolutionized how we live, act, and communicate in a fast-paced and ever-changing society. With much of our activities moving to the digital workspace, bringing technology closer to everyone is indispensable in overcoming the new normal challenges. As we embrace the breakthroughs of the 21st century, the fight for internet democracy, equitable access to connectivity devices, and science and technology education shall help us conquer new challenges and maximize what technology could offer.</Typography>
            <Typography>While the SAMAHAN has already initiated since last year several campaigns on technology democratization, it seeks to take its steps further in shaping a world where the use of technology is no longer determined by one’s privilege but becomes the norm — a future where quality education continues to move forward while ensuring that no one is left behind. It aims to spearhead projects to facilitate the distribution of connectivity devices to every Atenean and capacitate them to navigate online learning better together. </Typography>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Typography style={{ marginBottom: '2rem' }}>As we welcome another school year, the SAMAHAN shifts its focus to one of the sidelined and underrepresented advocacies in the university community — sexual education. A topic with negative connotations in the public eye, discussions pertinent to reproductive health, sexual activity, and family planning remain an unspoken language among Ateneans. With the increase in the number of HIV cases across the country, the SAMAHAN sees the urgency of breaking the stigma commonly associated with sexual education by pioneering campaigns and discourses centralizing on a misunderstood subject.</Typography>
            <Typography>Under the leadership of the Department of Campaigns and Advocacies, the SAMAHAN endeavors to own the future where Ateneans are provided safe spaces to talk about sex education as part of ensuring sexual well-being as mature, functional adults — a future where the once frowned-upon subject is now welcomed even in normal conversations as a matter of talking about an integral part of our beings.</Typography>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
