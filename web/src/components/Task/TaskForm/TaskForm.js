import { useEffect, useState } from 'react'

import {
  Box,
  SimpleGrid,
  Text,
  Button,
  ButtonGroup,
  Center,
} from '@chakra-ui/react'
import moment from 'moment'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  CheckboxField,
  TextField,
  Submit,
  DatetimeLocalField,
  DateField,
  InputField,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'
const UPDATE_TASK = gql`
  mutation updateTaskMutation($id: Int!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
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
const TaskForm = (props) => {
  const { isAuthenticated, currentUser } = useAuth()
  console.log(isAuthenticated)
  console.log(currentUser)
  const onSubmit = (data) => {
    data.userID = currentUser.id
    //WE NEED TO MAKE IT SO THAT THE SESSION USERID IS HERE INSTEAD
    //data.userID = 1
    data.completed = false
    data.isAppointment = false
    props.onSave(data, props?.task?.id)
  }
  const [titleChange, setTitleChange] = useState(false)
  const [create] = useMutation(UPDATE_TASK)
  const titleHandler = (e) => {
    create({
      variables: {
        id: parseInt(props?.task?.id),
        input: { title: e.target.value },
      },
    })
  }
  const [descChange, setDescChange] = useState(false)
  const descHandler = (e) => {
    create({
      variables: {
        id: parseInt(props?.task?.id),
        input: { description: e.target.value },
      },
    })
  }
  const [durChange, setDurChange] = useState(false)
  const durHandler = (e) => {
    create({
      variables: {
        id: parseInt(props?.task?.id),
        input: { duration: parseInt(e.target.value) },
      },
    })
  }
  const [priChange, setPriChange] = useState(false)
  const priHandler = (e) => {
    create({
      variables: {
        id: parseInt(props?.task?.id),
        input: { duration: parseInt(e.target.value) },
      },
    })
  }
  const completeHandler = (e) => {
    var setComplete = false
    if (document.getElementById('completed').checked) {
      setComplete = true
    } else {
      setComplete = false
    }
    create({
      variables: {
        id: parseInt(props?.task?.id),
        input: { completed: setComplete },
      },
    })
  }
  const dateHandler = (e) => {
    var dateSet = Date.parse(e.target.value)
    create({
      variables: {
        id: parseInt(props?.task?.id),
        input: {
          dueDate: moment(dateSet).format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
        },
      },
    })
  }

  return (
    <Center>
      <Box maxW="lg" borderWidth="2px" borderRadius="lg" overflow="hidden">
        <div className="rw-form-wrapper">
          <Box bg="blue.500" w="100%" color="white">
            <h2 className="rw-heading rw-heading-secondary">
              Insert Task Information
            </h2>
          </Box>
          <Form onSubmit={onSubmit} error={props.error}>
            <SimpleGrid columns={2} spacing="2px" border="2px">
              <Box w="100%" bg="white" color="blue.500">
                <Label
                  name="title"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Title</Text>
                </Label>
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <TextField
                  name="title"
                  defaultValue={props.task?.title}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                  onChange={(e) => {
                    titleHandler(e)
                  }}
                />
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <FieldError name="title" className="rw-field-error" />
                <Label
                  name="description"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Description</Text>
                </Label>
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <TextField
                  name="description"
                  defaultValue={props.task?.description}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                  onChange={(e) => {
                    descHandler(e)
                  }}
                />
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <FieldError name="description" className="rw-field-error" />
                <Label
                  name="duration"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Duration</Text>
                </Label>
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <NumberField
                  name="duration"
                  defaultValue={props.task?.duration}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                  onChange={durHandler}
                />
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <FieldError name="duration" className="rw-field-error" />
                <Label
                  name="priority"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Priority</Text>
                </Label>
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <NumberField
                  name="priority"
                  defaultValue={props.task?.priority}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                  onChange={priHandler}
                />
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <FieldError name="duration" className="rw-field-error" />
                <Label
                  name="priority"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Completed</Text>
                </Label>
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <CheckboxField
                  name="completed"
                  defaultValue={checkboxInputTag(props.task?.completed)}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: false }}
                  onChange={completeHandler}
                />
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <FieldError name="dueDate" className="rw-field-error" />
                <Label
                  name="dueDate"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Due Date</Text>
                </Label>
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <DateField name="dueDate" onChange={dateHandler} />
                <FieldError name="dueDate" className="rw-field-error" />
              </Box>
            </SimpleGrid>
          </Form>
        </div>
      </Box>
    </Center>
  )
}

export default TaskForm
