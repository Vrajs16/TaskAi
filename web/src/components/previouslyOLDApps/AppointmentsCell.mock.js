// Define your own mock data here:
export const standard = () => ({
  appointments: [
    {
      id: 42,
      title: 'Mock Task 1',
      description: 'Mock Task 2 Description',
      duration: 34,
      priority: 3,
      completed: 'completed',
      duedate: new Date('2022-11-12T03:24:00'),
      createdat: null,
      appointment: true
    },
    {
      id: 43,
      title: 'Mock Task 2',
      description: 'Mock Task 2 Description',
      duration: null,
      priority: 1,
      completed: 'not started',
      duedate: new Date('2022-11-14T18:24:00'),
      createdat: null,
      appointment: false
    },
    {
      id: 44,
      title: 'Mock Task 3',
      description: 'Mock Task 3 Description',
      duration: 120,
      priority: 2,
      completed: 'completed',
      duedate: new Date('2022-11-13T15:24:00'),
      createdat: null,
      appointment: true
    },
    {
      id: 45,
      title: 'Mock Task 4',
      description: 'Mock Task 2 Description',
      duration: 13,
      priority: 1,
      completed: 'deleted',
      duedate: new Date('2022-11-14T03:24:00'),
      createdat: null,
      appointment: true
    },
    {
      id: 46,
      title: 'Mock Task 1',
      description: 'Mock Task 2 Description',
      duration: 65,
      priority: 3,
      completed: 'in progress',
      duedate: new Date('2022-11-14T18:24:00'),
      createdat: null,
      appointment: true
    },
    {
      id: 47,
      title: 'Mock Task 1',
      description: 'Mock Task 2 Description',
      duration: 15,
      priority: 2,
      completed: 'not started',
      duedate: new Date('2022-11-15T03:24:00'),
      createdat: null,
      appointment: true
    },
    {
      id: 48,
      title: 'Mock Task 1',
      description: 'Mock Task 2 Description',
      duration: 25,
      priority: 1,
      completed: 'rolled over',
      duedate: new Date('2022-11-14T15:24:00'),
      createdat: null,
      appointment: true
    },
    {
      id: 49,
      title: 'Mock Task 1',
      description: 'Mock Task 2 Description',
      duration: null,
      priority: 3,
      completed: 'not started',
      duedate: new Date('2022-11-14T00:24:00'),
      createdat: null,
      appointment: false
    },
  ],
})
