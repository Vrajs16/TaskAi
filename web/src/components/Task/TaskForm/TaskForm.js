import { Box, SimpleGrid, Text, Button, ButtonGroup } from '@chakra-ui/react'

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
  const onSubmit = (data) => {
    props.onSave(data, props?.task?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <br></br>
      <br></br>
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userID"
          defaultValue={props.task?.userID}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userID" className="rw-field-error" />
        <br></br>
        <Label
          name="isAppointment"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is appointment
        </Label>

        <CheckboxField
          name="isAppointment"
          defaultChecked={props.task?.isAppointment}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isAppointment" className="rw-field-error" />
        <br></br>
        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.task?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />
        <br></br>
        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.task?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />
        <br></br>
        <Label
          name="duration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Duration
        </Label>

        <NumberField
          name="duration"
          defaultValue={props.task?.duration}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="duration" className="rw-field-error" />
        <br></br>
        <Label
          name="priority"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Priority
        </Label>

        <NumberField
          name="priority"
          defaultValue={props.task?.priority}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="priority" className="rw-field-error" />
        <br></br>
        <Label
          name="completed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Completed
        </Label>

        <CheckboxField
          name="completed"
          defaultChecked={props.task?.completed}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="completed" className="rw-field-error" />

        <br></br>
        <DateField name="dueDate" />
        <FieldError name="dueDate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaskForm
