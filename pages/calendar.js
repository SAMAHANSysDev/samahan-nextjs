import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import gcal from '../utils/google';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Banner from '../components/calendar/banner';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  rootCalContainer: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    paddingTop: 30,
    paddingBottom: 30
  },
  calendarContainer: {
    display: 'flex',
    width: '80%',
    margin: 'auto',
    marginBottom: 0,
    justifyContent: 'center'
  },
  rootContainer: {
    width: '100%',
    marginBottom: 0,
  },
  paper: {
    padding: '6px 16px',
    backgroundColor: theme.palette.secondary.main,
    color: '#000'
  },
}));

const Page = ({ events: rawEvents }) => {
  // Get the data of the current list.
  const classes = useStyles();
  const [events, setEvents] = React.useState([]);
  const [daysAway, setDaysAway] = React.useState(0);
  const [nowString, setNowString] = React.useState('');

  React.useEffect(() => {
    setEvents(rawEvents)
  }, []);

  React.useEffect(() => {
    if (events.length > 0) {
      setDaysAway(Math.round(((new Date(events[0].start.dateTime)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24)));
    } else {
      setNowString(`There are no upcoming events!`);
    }
  }, [events]);

  React.useEffect(() => {
    if (daysAway > 1) {
      setNowString(`You are ${daysAway} days away from the next event!`);
    } else if (daysAway === 1) {
      setNowString(`You are ${daysAway} day away from the next event!`);
    } else {
      setNowString(`The next event is today!`);
    }
  }, [daysAway]);

  return (
    <div className={classes.rootContainer}>
      {/* Insert header here! */}
      <div style={{ height: 100 }} />
      <Banner />
      <div style={{ height: 100 }} />
      <div className={classes.rootCalContainer}>
        <div className={classes.calendarContainer}>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="secondary">
                  This is you, right now.
                </Typography>
                <Typography variant="body2" color="secondary">
                  {(new Date()).toDateString()}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={0} className={classes.paper}>
                  <Typography>{nowString}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            { events.length > 0 ? events.map((event) => (
              <TimelineItem key={event.id}>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="secondary">
                    {(new Date(event.start.dateTime)).toDateString()}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {(new Date(event.start.dateTime)).toTimeString()}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {event.location}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={0} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      {event.summary}
                    </Typography>
                    <Typography>{event.description}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            )) :
              null
            }
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    const events = (await gcal.events.list({
      calendarId: process.env.CALENDAR_ID,
      orderBy: 'startTime',
      singleEvents: true,
      timeMin: new Date(),
      maxResults: 10
    })).data.items
    return { props: { events } };
  } catch (err) {
    return { props: { events: [] } };
  }
}



export default Page;