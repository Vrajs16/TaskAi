import { Text, Center } from '@chakra-ui/react'

import TasksCell from 'src/components/Task/TasksCell'

const TasksPage = () => {
  return (
    <>
      <Center>
        <Text fontSize="3xl" as="b" color="blue.500">
          Tasks Page
        </Text>
      </Center>
      <TasksCell />
    </>
  )
}

export default TasksPage
