export const getEvents = async ({start, end, code}) => {
  const { google } = require('googleapis')

  const authInstance = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL,

    // redirect url should be back to our page
  )

  let { tokens } = await authInstance.getToken(code)
  authInstance.setCredentials(tokens)

  const googleCalendar = google.calendar({
    version: 'v3',
    auth: authInstance
  })

  const response = await googleCalendar.events.list({
    calendarId: 'primary',
    orderBy: 'startTime',
    timeMin: start,
    timeMax: end,
    // note not setting maxResults: #
    singleEvents: true, // breaks down recurring events
  })

  const calEvents = response.data.items

  // if calEvents is of size zero then no new events
  if (calEvents.length === 0 || !calEvents){
    console.log("No Events Found!")
    return
  }

  const events = calEvents.map((item, i) => {
    const start = item.start.dateTime || item.start.date
    const end = item.end.dateTime || item.end.date
    const event = {
      summary: item.summary,
      description: item.description,
      start: start, // this instance of start and end come from the variables we just defined above in lines 38/39
      end: end
    }
    return event
  })


  return { code , events }
}