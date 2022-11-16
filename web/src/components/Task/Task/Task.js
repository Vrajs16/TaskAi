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
          <table className="rw-table">
            <tbody>
              <tr>
                <th>Id</th>
                <td>{task.id}</td>
              </tr>
              <tr>
                <th>User id</th>
                <td>{task.userID}</td>
              </tr>
              <tr>
                <th>Is appointment</th>
                <td>{checkboxInputTag(task.isAppointment)}</td>
              </tr>
              <tr>
                <th>Title</th>
                <td>{task.title}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{task.description}</td>
              </tr>
              <tr>
                <th>Duration</th>
                <td>{task.duration}</td>
              </tr>
              <tr>
                <th>Priority</th>
                <td>{task.priority}</td>
              </tr>
              <tr>
                <th>Completed</th>
                <td>{checkboxInputTag(task.completed)}</td>
              </tr>
              <tr>
                <th>Due date</th>
                <td>{timeTag(task.dueDate)}</td>
              </tr>
              <tr>
                <th>Created at</th>
                <td>{timeTag(task.createdAt)}</td>
              </tr>
            </tbody>
          </table>
          <nav className="rw-button-group">
            <Link
              to={routes.editTask({ id: task.id })}
              className="rw-button rw-button-blue"
            >
              Edit
            </Link>
            <Button
              colorScheme="gray"
              variant="outline"
              size="md"
              onClick={() => onDeleteClick(task.id)}
            >
              <div className="rw-button-icon">Delete</div>
            </Button>
          </nav>
        </Box>
      </Box>
    </>
  )
}

export default Task
