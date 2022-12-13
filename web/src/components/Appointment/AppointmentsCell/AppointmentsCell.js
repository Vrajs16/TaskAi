import { Box, Center, Divider, HStack, Text, Spacer } from '@chakra-ui/react'
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
    // <div className="rw-text-center">
    //   {'No appointments yet. '}
    //   <Link to={routes.newAppointment()} className="rw-link">
    //     {'Create one?'}
    //   </Link>
    // </div>
    <div>No Appointments Please Sync Google Calendar</div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ appointments}) => {
  //return <Appointments appointments={appointments} />

  return (
    <ul>
      {appointments.map((item) => {
          return (
            <Box key={item.id}  borderWidth="1px" borderRadius="lg" p="2" m="1">
              <HStack>
                <Text fontSize='l' as='b'>{item.title}</Text>
                <Spacer />
                  <Text fontSize='l'>{`${item.start.substring(0, 10)} - ${item.end.substring(0, 10)}`}</Text>
                <Center height='20px'><Divider orientation='vertical'/></Center>
                
              </HStack>
            </Box>
          )
      })}
    </ul>
  )
}
