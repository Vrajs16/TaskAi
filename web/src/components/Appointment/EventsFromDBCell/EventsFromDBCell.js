import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'



export const QUERY = gql`
  query FindAppointments {
    appointments {
      id
      userID
      title
      description
      start
      end
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div>No Appointments In Database</div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ appointments,  }) => {
  //return <Appointments appointments={appointments} />
  //console.log(appointments)
  
  const arr = []
  const events = appointments.map((item) =>({
    id: item.id,
    title: item.title,
    description: item.description || '',
    start: item.start.substring(0,10),
    end: item.end.substring(0,10)
  }))
  console.log(events)
  for(let i=0; i < events.length; i++){
    arr.push(events[i])
  }
  return (
    <section>
    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" initialEvents={events}
    />
  </section>
  )
}
