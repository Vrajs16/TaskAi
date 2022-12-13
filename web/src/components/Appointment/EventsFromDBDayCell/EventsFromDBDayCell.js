import DayView from 'src/components/DayView'
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
    start: item.start,
    end: item.end
  }))

  return (
    <section>
    {/* Component Below Developed By Villaire Pierre*/}
    <DayView array2= {events}/>
  </section>
  )
}
