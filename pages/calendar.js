import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import gcal from 'utils/google';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import dynamic from 'next/dynamic';
const Banner = dynamic(() => import('components/calendar/banner'));

import { formatDistanceToNow, format, differenceInSeconds } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  rootCalContainer: {
    position: 'relative',
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
  footerMarginColor: {
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    height: 200,
    width: '100%',
    bottom: -200,
    left: 0
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
  const [nowString, setNowString] = React.useState('');
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    setEvents(rawEvents)
  }, []);

  React.useEffect(() => {
    window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (events.length > 0) {
      if (differenceInSeconds(new Date(events[0].start.dateTime), new Date()) > 0) {
        setNowString(`You are ${formatDistanceToNow(new Date(events[0].start.dateTime))} away from the next event!`);
      } else {
        setNowString(`${events[0].summary} is happening right now!`);
      }
    } else {
      setNowString(`There are no upcoming events!`);
    }
  }, [events, currentTime]);

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
                  {format(currentTime, 'MMM d, yyyy (h:mm a)')}
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
                    Start: {format(new Date(event.start.dateTime), 'MMM d, yyyy (h:mm a)')}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    End: {format(new Date(event.end.dateTime), 'MMM d, yyyy (h:mm a)')}
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
        <div className={classes.footerMarginColor} />
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
    return { props: { events }, revalidate: 10 };
  } catch (err) {
    return { props: { events: [] }, revalidate: 10 };
  }
}



export default Page;