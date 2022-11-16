import { Box, SimpleGrid, Text, Button, ButtonGroup } from '@chakra-ui/react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
  DateField,
} from '@redwoodjs/forms'

const TaskForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.task?.id)
  }

  return (
    <>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box bg="blue.500" w="100%" color="white">
          Task {props.task?.id}
        </Box>
        <SimpleGrid columns={1} spacing={2} border="1px" borderColor="gray.200">
          <div className="rw-form-wrapper">
            <Form onSubmit={onSubmit} error={props.error}>
              <Box height="30px">
                <FormError
                  error={props.error}
                  wrapperClassName="rw-form-error-wrapper"
                  titleClassName="rw-form-error-title"
                  listClassName="rw-form-error-list"
                />

                <Label
                  name="title"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Title</Text>
                </Label>

                <TextField
                  name="title"
                  defaultValue={props.task?.title}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                />

                <FieldError name="title" className="rw-field-error" />
              </Box>

              <Box height="30px">
                <Label
                  name="description"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Description</Text>
                </Label>

                <TextField
                  name="description"
                  defaultValue={props.task?.description}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                />

                <FieldError name="description" className="rw-field-error" />
              </Box>

              <Box height="30px">
                <Label
                  name="duration"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Duration</Text>
                </Label>

                <NumberField
                  name="duration"
                  defaultValue={props.task?.duration}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                />

                <FieldError name="duration" className="rw-field-error" />
              </Box>

              <Box height="30px">
                <Label
                  name="priority"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Priority</Text>
                </Label>

                <NumberField
                  name="priority"
                  defaultValue={props.task?.priority}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                />

                <FieldError name="priority" className="rw-field-error" />
              </Box>

              <Box height="30px">
                <Label
                  name="completed"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Completed</Text>
                </Label>

                <CheckboxField
                  name="completed"
                  defaultChecked={props.task?.completed}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                />

                <FieldError name="completed" className="rw-field-error" />
              </Box>

              <Box height="30px">
                <Label
                  name="completed"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  <Text as="b">Due Date</Text>
                </Label>
                <DateField name="dueDate" />
                <FieldError name="dueDate" className="rw-field-error" />
              </Box>
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
            </Form>
          </div>
        </SimpleGrid>
      </Box>
    </>
  )
}

export default TaskForm
