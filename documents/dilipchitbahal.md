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
    * My understanding of how to do this would be to push google calendar api events to the local database and pull events from gql query so we only ever need to make 1 api call with 1 access token instead of repeated calls
* Populate the Appointments tab on the planner page with Google Calendar Events
    * My approach of how to do this is simply the same as above where I would query gql for the google calendar events stored


* Found issue with planner page after google auth takes place where returning to home page of taskai returns dom error: will check into this