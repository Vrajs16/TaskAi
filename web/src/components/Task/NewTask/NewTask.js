import { Text, Center } from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TaskForm from 'src/components/Task/TaskForm'

const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`

const NewTask = () => {
  const [createTask, { loading, error }] = useMutation(CREATE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task created')
      navigate(routes.tasks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTask({ variables: { input } })
    routes.planner()
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <Center>
          <Text fontSize="3xl" as="b" color="blue.500">
            New Task
          </Text>
        </Center>
      </header>
      <div className="rw-segment-main">
        <TaskForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTask
