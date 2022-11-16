import { Box, SimpleGrid, Text, Button, ButtonGroup } from '@chakra-ui/react'

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
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box bg="blue.500" w="100%" color="white">
          <h2 className="rw-heading rw-heading-secondary">
            Task {task.id} Details
          </h2>
        </Box>
        <SimpleGrid columns={2} spacing={2} border="1px" borderColor="gray.200">
          <Box height="20px">
            <Text as="b">ID</Text>
          </Box>
          <Box height="20px">{task.id}</Box>

          <Box height="20px">
            <Text as="b">Title</Text>
          </Box>
          <Box height="20px">{task.title}</Box>

          <Box height="20px">
            <Text as="b">Description</Text>
          </Box>
          <Box height="20px">{task.description}</Box>

          <Box height="20px">
            <Text as="b">Duration</Text>
          </Box>
          <Box height="20px">{task.duration}</Box>

          <Box height="20px">
            <Text as="b">Priority</Text>
          </Box>
          <Box height="20px">{task.priority}</Box>

          <Box height="20px">
            <Text as="b">Completed</Text>
          </Box>
          <Box height="20px">{checkboxInputTag(task.completed)}</Box>

          <Box height="20px">
            <Text as="b">Due date</Text>
          </Box>
          <Box height="20px">{timeTag(task.dueDate)}</Box>

          <Box height="20px">
            <Text as="b">Created at</Text>
          </Box>
          <Box height="20px">{timeTag(task.createdAt)}</Box>
        </SimpleGrid>
      </Box>
      <ButtonGroup gap="4">
        <Link to={routes.editTask({ id: task.id })}>
          <Button colorScheme="gray" variant="outline" size="md">
            Edit
          </Button>
        </Link>
        <Button
          colorScheme="gray"
          variant="outline"
          size="md"
          onClick={() => onDeleteClick(task.id)}
        >
          <div className="rw-button-icon">Delete</div>
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Task
