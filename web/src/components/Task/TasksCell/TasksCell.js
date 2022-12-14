import { CheckIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Center, Divider, HStack, Text } from '@chakra-ui/react'

import { Link, navigate, routes } from '@redwoodjs/router'

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
          const ProgressIcon = item.completed ? CheckIcon : MinusIcon

          return (
            <Box key={item.id} onClick={() => navigate(routes.task({id: item.id}))} style={{cursor:'pointer'}} borderWidth="1px" borderRadius="lg" p="2" m="1" bg={priorityMap[item.priority]}>
              <HStack>
                <ProgressIcon />
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
//return <Tasks tasks={tasks} />
//<Text fontSize='l'>{By ${taskTime}}</Text>
// const iconMap = {
//   completed: CheckIcon,
//   'in progress': SpinnerIcon,
//   deleted: CloseIcon,
//   'rolled over': ArrowForwardIcon,
//   'not started': MinusIcon,
// }
