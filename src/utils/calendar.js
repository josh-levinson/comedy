const fs = require('fs');
const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];


function listEvents(apiKey) {
  const calendar = google.calendar({
    version: 'v3', 
    auth: apiKey,
  });

  calendar.events.list({
    calendarId: `e46tdagg6fbqkki2uqr8njer6c@group.calendar.google.com`,
    timeMin: (new Date()).toISOString(),
    maxResults: 5,
    singleEvents: true,
    orderBy: `startTime`
	}, (err, res) => { 
		if (err) return console.log('The API returned an error: ' + err);
   		const events = res.data.items;
    if (events.length) {
      console.log('Upcoming 10 events:');
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`);
      });
    } else {
      console.log('No upcoming events found.');
    }
  });
}

fs.readFile('google_api.txt', 'utf-8', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  listEvents(content.trim());
});
