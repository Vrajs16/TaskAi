# Dilip Chitbahal

# Completed Tasks:

# NOTE: The calendar api took a long time for me to implement because I was brand new to API and I was reading a ton of documentation only to find out the Google Identity Services had most of that deprecated, and there were limited visual resources such as tutorials available, the API side of things only made sense when Professor went over what he did in class…



* Google Calendar API function that returns an array of events is fully implemented
    * Created a function that runs 2 api services, createAuth and GoogleCalEvents where createAuth prompts the user to sign in with a google email address which will grant consent to the readonly scopes
    * GoogleCalEvents will create an authInstance with a token to make the api call for calendar.events.list
    * JSON object returned with google cal events
* Follows professor’s example repo
* Appointments now populate the calendar view by returning a fullcalendar.io calendar component with prop initialEvents = { returned array of google calendar events }
    * Worked with Villaire Pierre who implemented the calendar view to understand how to populate the view with event objects
    * On Calendar component created some logic that parses the Google API response to get relevant fields and input them into FullCalendar.io
    * Since we are using FullCalendar.io the styling of the events will be limited

# TODOs:

* Update the daily view and the weekly view
    * My understanding of how to do this would be to push google calendar api events to the local database and pull events from gql query so we only ever need to make 1 api call with 1 access token instead of repeated calls, this way I dont need to implement the refresh token, because Professor, I have tried so hard to wrap my brain around it and I still haven't figured it out. You will see my 37 commits and it isn't for a lack of trying!
    * Status: DONE
* Populate the Appointments tab on the planner page with Google Calendar Events
    * My approach of how to do this is simply the same as above where I would query gql for the google calendar events stored
    * Status: DONE

* Found issue with planner page after google auth takes place where returning to home page of taskai returns dom error: will check into this
* Status: Still broken

* Created EventsFromDB, EventsFromDBWeek and EventsFromDBDay cells which query the database to pull appointments, map an array from the query response, and supply that array to villaire pierre's components which render the FullCalendar.io calendars.
* Essentially, month, day and week views are 3 seperate calendars hence why we query appointmnents 3 differnent times to populate each calendar
* Created Appointments schema in schema.prisma
* Edited Planner Page to include two buttons, a Sync button which is basically onClick return AuthorizeCell and Sync google events which onClick will call FullCalEvents
* FullCalEvents cell will getEvents query which is the google api call, gets the calendar events and maps it to an array with field names required by FullCalendar.io to create event objects
* FullCalEvents will also run the createAppointment mutation
* Worked with Mohamed Rachid to create filter function on FullCalEvents cell to handle duplicate events incoming from new/subsequent google calendar api calls
    - Filter function works by querying Appointments model to get Events ID that are currently exisiting in the database
    - Compare the database's event IDs with incoming google calendar event ids and if the IDs are equal, don't add it to the calendar
    - If the event IDs are differnt, it is a different event so therefore push it to the database
* Big Shoutout to Mohamed for staying up with me until 6AM to finish this bug fix, as well as Robert who had the brilliant idea of scafolding the Appointment model so we can take advantage to redwood generated queries in order to even query the database and create mutations for createAppointments

* Replaced AppointmentsCell in TaskView cell to accomodate for the new scafollded appointments

* I need to shoutout Robert D, Mohamed R, Willis D, and Villaire P for getting together the last week of the last sprint and staying up until AM hours without limit working on this project, figuring things out on the back and front end! We had so many productive changes, bug fixes, and solutions. All of these teammates truly showed determination and effort to complete this project