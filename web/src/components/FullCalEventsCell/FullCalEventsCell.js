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
    appointments {
      id
      iCal
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'blue' }}>Please Hit Sync Button Again</div>
)

export const Success = ({ getEvents, appointments }) => {

  /* code below handles push to database */
 var appsCount = Object.keys(appointments).length

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
  const appsID = appointments.map((item) => ({
    id: item.iCal
  }))


  const eventsDB = getEvents.events.map(item => ({
    userID: currentUser.id,
    title: item.summary,
    description: item.description || '',
    start: item.start,
    end: item.end,
    iCal: item.id
  }))
  // The Following Code Below Was Written By Dilip Chitbahal, Mohamed Rachid
  const arr = []
  if(appsCount != 0){
    for(let i=0; i < eventsDB.length; i++){
      var count2 = 0
      for(let j=0; j < appsID.length; j++){
        console.log(appsID[j].id === eventsDB[i].iCal)
        if (appsID[j].id === eventsDB[i].iCal){
          count2 += 1
          continue;
        }
      }
      if(count2 === 0){
        arr.push(eventsDB[i])
      }

    }
  } else {
    for(let i=0; i < eventsDB.length; i++){
      arr.push(eventsDB[i])
    }
  }

  for(let i=0; i < arr.length; i++){
    create({variables: { input: arr[i]}})
  }
// End of Code Written by DC and MR



  count = count + 1
  }
  return (
      <div></div>
  )
}
