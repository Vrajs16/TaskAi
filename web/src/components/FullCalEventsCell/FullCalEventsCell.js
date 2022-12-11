import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'

export const QUERY = gql`
  query GoogleEvents ($start: String!, $end: String!, $code: String!) {
    getEvents(start: $start, end: $end, code: $code) {
      code
      events {
        summary
        description
        start
        end
      }
    }
  }
`
// export const afterQuery = (data) => ({

// })
// push to database here after sanitizing like below

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ getEvents }) => {
  const arr = []
  const events = getEvents.events.map(item => ({
    id: item.id,
    title: item.summary,
    start: item.start.replace(/T.*$/, ''),
    end: item.end.replace(/T.*$/, '')
  }))

  for(let i=0; i < events.length; i++){
    //console.log(events[i])
    arr.push(events[i])
  }
  // TODO
  /*
    Push Arr to database HERE
  */
  return (
      <section>
      <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' initialEvents={arr}/>
      </section>
  )
}
