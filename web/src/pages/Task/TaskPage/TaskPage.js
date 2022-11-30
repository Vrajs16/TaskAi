import { Text, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import TaskCell from 'src/components/Task/TaskCell'

const TaskPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Task" description="Task Page" />
      <Center>
        <Text fontSize="3xl" as="b" color="blue.500">
          Task Page
        </Text>
      </Center>
      <TaskCell id={id} />
    </>
  )
}

export default TaskPage
