import {
  Box,
  SimpleGrid,
  Text,
  Button,
  ButtonGroup,
  Center,
} from '@chakra-ui/react'

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
const TaskForm = (props) => {
  const { isAuthenticated, currentUser } = useAuth()
  console.log(isAuthenticated)
  console.log(currentUser)
  const onSubmit = (data) => {
    data.userID = currentUser.id
    data.isAppointment = false
    props.onSave(data, props?.task?.id)
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
                <DateField name="dueDate" />
                <FieldError name="dueDate" className="rw-field-error" />
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <Label
                  name="completed"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Task Completed?</Text>
                </Label>
              </Box>
              <Box w="100%" bg="white" color="blue.500">
                <CheckboxField
                  name="completed"
                  defaultValue={props.task?.completed}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: false }}
                />
              </Box>

              <Box w="100%" bg="white" color="blue.500">
                <Button colorScheme="gray" variant="outline" size="md">
                  <div className="rw-button-group">
                    <Submit
                      disabled={props.loading}
                      className="rw-button rw-button-blue"
                    >
                      Save
                    </Submit>
                  </div>
                </Button>
              </Box>
            </SimpleGrid>
          </Form>
        </div>
      </Box>
    </Center>
  )
}

export default TaskForm
