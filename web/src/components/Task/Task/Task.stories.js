import Task from './Task'

export const generated = () => {
  return (
    <Task
      task={{
        id: 1,
        userID: 1,
        isAppointment: true,
        title: 'First Task',
        description: 'This is an important task.',
        duration: 10,
        priority: 1,
        isCompleted: false,
        dueDate: '2022-06-11T00:00',
        createdAt: '2022-06-11T00:00',
      }}
    />
  )
}

export default { title: 'Components/Task' }
