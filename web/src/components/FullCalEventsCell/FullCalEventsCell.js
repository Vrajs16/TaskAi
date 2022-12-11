import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'
import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
var count = 0

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
// export const afterQuery = ({ getEvents }) => {
//   const CREATE_TASK_MUTATION = gql`
//   mutation CreateTaskMutation($input: CreateTaskInput!) {
//     createTask(input: $input) {
//       id
//     }
//   }
// `
//   const [create] = useMutation(CREATE_TASK_MUTATION)
//   const {currentUser } = useAuth()

//   const eventsDB = getEvents.events.map(item => ({
//     userID: currentUser.id,
//     isAppointment: true,
//     title: item.summary,
//     description: item.description,
//     duration: 1, // not important for appointments
//     priority: 1, // not import for appointments
//     completed: false,
//     dueDate: item.end
//   }))

//   for(let i=0; i < eventsDB.length; i++){
//     create({variables: { input: eventsDB[i]}})
//   }
// }
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
    description: item.description,
    start: item.start.replace(/T.*$/, ''),
    end: item.end.replace(/T.*$/, '')
  }))

  for(let i=0; i < events.length; i++){
    //console.log(events[i])
    arr.push(events[i])
  }
  /* code above handles the calendar render */
  /* code below handles push to database */
 if(count === 0) {const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`
  const [create] = useMutation(CREATE_TASK_MUTATION)
  const {currentUser } = useAuth()

  const eventsDB = getEvents.events.map(item => ({
    userID: currentUser.id,
    isAppointment: true,
    title: item.summary,
    description: item.description || '',
    duration: 1, // not important for appointments
    priority: 1, // not import for appointments
    completed: false,
    dueDate: item.end
  }))
  console.log(eventsDB.length)
  for(let i=0; i < eventsDB.length; i++){
    create({variables: { input: eventsDB[i]}})
  }
  count = count + 1
  }
  return (
      <section>
      <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' initialEvents={arr}/>
      </section>
  )
}
