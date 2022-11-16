import {
  ArrowForwardIcon,
  CheckIcon,
  CloseIcon,
  MinusIcon,
  SpinnerIcon,
} from '@chakra-ui/icons'
import { Box, Center, Divider, HStack, Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import Tasks from 'src/components/Task/Tasks'
export const QUERY = gql`
  query FindTasks {
    tasks {
      id
      userID
      isAppointment
      title
      description
      duration
      priority
      completed
      dueDate
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tasks yet. '}
      <Link to={routes.newTask()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tasks, day }) => {
  const priorityMap = { 1: 'green', 2: 'yellow', 3: 'red' }
  if (day == undefined) {
    return <Tasks tasks={tasks} />
  }
  return (
    <ul>
      {tasks.map((item) => {
        if (day === item.dueDate.slice(0, 10) && !item.isAppointment) {
          let hours = new Date(item.dueDate).getHours()
          let minutes = new Date(item.dueDate).getMinutes()
          let ampm = hours >= 12 ? 'pm' : 'am'
          hours = hours % 12
          hours = hours ? hours : 12
          hours = hours < 10 ? '0' + hours : hours
          minutes = minutes < 10 ? '0' + minutes : minutes
          let taskTime = hours + ':' + minutes + ampm
          {
            /* const ProgressIcon = iconMap[item.completed] */
          }
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
                {/* <ProgressIcon /> */}

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
//return <Tasks tasks={tasks} />
//<Text fontSize='l'>{By ${taskTime}}</Text>
// const iconMap = {
//   completed: CheckIcon,
//   'in progress': SpinnerIcon,
//   deleted: CloseIcon,
//   'rolled over': ArrowForwardIcon,
//   'not started': MinusIcon,
// }
