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
    <div>No Appointments Please Sync Google Calendar</div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ appointments, day}) => {
  return (
    <ul>
      {appointments.map((item) => {

          if (day === item.start.slice(0, 10)) {
            return (
              <Box key={item.id} borderWidth="1px" borderRadius="lg" p="2" m="1" bg="blue.500">
                <HStack>
                  <Text fontSize='l'>{`${item.start.slice(11,16)} - ${item.end.slice(11,16)}`}</Text>
                  <Center height='20px'><Divider orientation='vertical'/></Center>
                  <Text fontSize='l' as='b'>{item.title}</Text>
                  <Center height='20px'><Divider orientation='vertical'/></Center>
                  <Text fontSize='l'>{item.description}</Text>
                </HStack>
              </Box>
            )
          }
      })}
    </ul>
  )
}
