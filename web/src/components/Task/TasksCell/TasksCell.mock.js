// Define your own mock data here:
export const standard = () => ({
  tasks: [
    {
      id: 42,
      userID: 1,
      title: 'Mock Task 1',
      description: 'Mock Task Description',
      duration: null,
      priority: 3,
      completed: 'not started',
      dueDate: new Date(new Date() - 300*60*1000).toJSON(),
      createdAt: null,
      isAppointment: false
    },
    {
      id: 45,
      userID: 1,
      title: 'Mock Task 2',
      description: 'Mock Task Description',
      duration: null,
      priority: 1,
      completed: 'not started',
      dueDate: new Date(new Date() - 300*60*1000).toJSON(),
      createdAt: null,
      isAppointment: false
    },
    {
      id: 46,
      userID: 1,
      title: 'Mock Task 3',
      description: 'Mock Task Description',
      duration: null,
      priority: 2,
      completed: 'not started',
      dueDate: new Date(new Date() - 300*60*1000).toJSON(),
      createdAt: null,
      isAppointment: false
    },
    {
      id: 43,
      userID: 1,
      title: 'Mock Appointment 1',
      description: 'Mock Appointment Description',
      duration: 60,
      priority: 2,
      completed: 'not started',
      dueDate: new Date(new Date() - 300*60*1000).toJSON(),
      createdAt: null,
      isAppointment: true
    },
    {
      id: 44,
      userID: 1,
      title: 'Mock Appointment 2',
      description: 'Mock Appointment Description',
      duration: 60,
      priority: 1,
      completed: 'not started',
      dueDate: new Date(new Date() - 300*60*1000).toJSON(),
      createdAt: null,
      isAppointment: true
    },
  ],
  day: new Date(new Date() - 300*60*1000).toJSON().slice(0, 10),
  isTasks: true
})
