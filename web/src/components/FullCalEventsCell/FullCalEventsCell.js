import React from 'react'
import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
var count = 0

export const QUERY = gql`
  query GoogleEvents2 ($start: String!, $end: String!, $code: String!) {
    getEvents(start: $start, end: $end, code: $code) {
      code
      events {
        id
        summary
        description
        start
        end
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'blue' }}>Please Hit Sync Button Again</div>
)

export const Success = ({ getEvents }) => {

  /* code below handles push to database */
 if(count === 0)
 {
  const CREATE_APP_MUTATION = gql`
  mutation CreateAppointmentMutation($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      id
    }
  }
`
  const [create] = useMutation(CREATE_APP_MUTATION)
  const {currentUser } = useAuth()

  const eventsDB = getEvents.events.map(item => ({
    userID: currentUser.id,
    title: item.summary,
    description: item.description || '',
    start: item.start,
    end: item.end
  }))

  for(let i=0; i < eventsDB.length; i++){
    create({variables: { input: eventsDB[i]}})
  }
  count = count + 1
  }
  return (
      <div></div>
  )
}
