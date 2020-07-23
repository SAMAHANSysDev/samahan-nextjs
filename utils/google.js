import { google } from 'googleapis';

const gcal = google.calendar({
  version: 'v3',
  auth: process.env.GOOGLE_AUTH,
})

export default gcal;