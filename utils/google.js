const { google } = require('googleapis');

const gcal = google.calendar({
  version: 'v3',
  auth: process.env.GOOGLE_AUTH,
})

module.exports = gcal;