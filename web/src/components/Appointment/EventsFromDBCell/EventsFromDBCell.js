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

export const Empty = ({date}) => {
  return (
    <>
      <Calendar changeDate = {date.changeDate}></Calendar>
    </>
    )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ appointments, date }) => {

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
    <Calendar array2= {events} changeDate={date.changeDate}/>
  </section>
  )
}


