import { useAuth } from '@redwoodjs/auth'
const {currentUser } = useAuth()
const id = parseInt(currentUser.id)
export const QUERY = gql`
query getApps($id: Int!) {
  appointments(userID: $id ) {
    description
    end
    id
    start
    title
  }
}
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ eventsFromDb }) => {
  console.log(eventsFromDb)
  return <div>{JSON.stringify(eventsFromDb)}</div>
}
