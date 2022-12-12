import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
export const QUERY = gql`
  query getApps {
    appointments  {
      description
      end
      id
      start
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No Events In Our Records</div>

export const Failure = () => (
  <div style={{ color: 'red' }}>Error: Events from DB Cell Not Working</div>
)

export const Success = ({ eventsFromDb }) => {
  console.log(eventsFromDb)
  return <div></div>
}
