import {
  ArrowForwardIcon,
  CheckIcon,
  CloseIcon,
  MinusIcon,
  SpinnerIcon,
} from '@chakra-ui/icons'
import { Box, Center, Divider, HStack, Text } from '@chakra-ui/react'

export const QUERY = gql`
  query TasksQuery {
    tasks {
      id
      title
      description
      duration
      priority
      completed
      duedate
      createdat
      appointment
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ tasks, day }) => {
  const priorityMap = { 1: 'green', 2: 'yellow', 3: 'red' }
  const iconMap = {
    completed: CheckIcon,
    'in progress': SpinnerIcon,
    deleted: CloseIcon,
    'rolled over': ArrowForwardIcon,
    'not started': MinusIcon,
  }
  return (
    <ul>
      {tasks.map((item) => {
        if (day === item.duedate.slice(0, 10) && !item.appointmet) {
          let hours = new Date(item.duedate).getHours()
          let minutes = new Date(item.duedate).getMinutes()
          let ampm = hours >= 12 ? 'pm' : 'am'
          hours = hours % 12
          hours = hours ? hours : 12
          hours = hours < 10 ? '0' + hours : hours
          minutes = minutes < 10 ? '0' + minutes : minutes
          let taskTime = hours + ':' + minutes + ampm
          const ProgressIcon = iconMap[item.completed]
          return (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              p="2"
              m="1"
              bg={priorityMap[item.priority]}
            >
              <HStack>
                <ProgressIcon />
                <Text fontSize="l">{`By ${taskTime}`}</Text>
                <Center height="20px">
                  <Divider orientation="vertical" />
                </Center>
                <Text fontSize="l" as="b">
                  {item.title}
                </Text>
              </HStack>
            </Box>
          )
        }
      })}
    </ul>
  )
}
