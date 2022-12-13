import Calendar from 'src/components/Calendar'

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

export const Success = ({ appointments }) => {

  const events = appointments.map((item) =>({
    id: item.id,
    title: item.title,
    description: item.description || '',
    start: item.start.substring(0,10),
    end: item.end.substring(0,10)
  }))

  return (
    <section>
    {/* Component Below Developed By Villaire Pierre*/}
    <Calendar array2= {events}/>
  </section>
  )
}
