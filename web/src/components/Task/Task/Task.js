import { Box, SimpleGrid, Text, Button, Center } from '@chakra-ui/react'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_TASK_MUTATION = gql`
  mutation DeleteTaskMutation($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`

const Task = ({ task }) => {
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task deleted')
      navigate(routes.tasks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete task ' + id + '?')) {
      deleteTask({ variables: { id } })
    }
  }

  return (
    <>
      <Center>
        <Box maxW="lg" borderWidth="2px" borderRadius="lg" overflow="hidden">
          <Box bg="blue.500" w="100%" color="white">
            <Link to={routes.editTask({ id: task.id })}>
              <h2 className="rw-heading rw-heading-secondary">
                Task {task.id} Details
              </h2>
            </Link>
            <SimpleGrid columns={2} spacing="2px" border="2px">
              <Box w="100%" bg="white" color="blue.500">
                <Text as="b">Id</Text>
              </Box>
              <Box w="!00%" bg="white" color="blue.500">
                <Text>{task.id}</Text>
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <Text as="b">User ID</Text>
              </Box>
              <Box w="!00%" bg="white" color="blue.500">
                <Text>{task.userID}</Text>
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <Text as="b">Title</Text>
              </Box>
              <Box w="!00%" bg="white" color="blue.500">
                <Text>{task.title}</Text>
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <Text as="b">Description</Text>
              </Box>
              <Box w="!00%" bg="white" color="blue.500">
                <Text>{task.description}</Text>
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <Text as="b">Duration</Text>
              </Box>
              <Box w="!00%" bg="white" color="blue.500">
                <Text>{task.duration}</Text>
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <Text as="b">Priority</Text>
              </Box>
              <Box w="!00%" bg="white" color="blue.500">
                <Text>{task.priority}</Text>
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <Text as="b">Completed</Text>
              </Box>
              <Box w="!00%" bg="white" color="blue.500">
                <Text>{checkboxInputTag(task.completed)}</Text>
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <Text as="b">Due Date</Text>
              </Box>
              <Box w="!00%" bg="white" color="blue.500">
                <Text>{timeTag(task.dueDate)}</Text>
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <Text as="b">Created At</Text>
              </Box>
              <Box w="!00%" bg="white" color="blue.500">
                <Text>{timeTag(task.createdAt)}</Text>
              </Box>

              <Box>
                <Link
                  to={routes.editTask({ id: task.id })}
                  className="rw-button rw-button-blue"
                >
                  <Button colorScheme="gray" variant="outline" size="md">
                    <div>Edit</div>
                  </Button>
                </Link>
              </Box>

              <Box>
                <Button
                  colorScheme="gray"
                  variant="outline"
                  size="md"
                  onClick={() => onDeleteClick(task.id)}
                >
                  <div className="rw-button-icon">Delete</div>
                </Button>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Center>
    </>
  )
}

export default Task
