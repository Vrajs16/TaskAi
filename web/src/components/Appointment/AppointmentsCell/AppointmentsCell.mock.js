// Define your own mock data here:
export const standard = () => ({
  appointments: [
    {
      id: 1,
      userID: 1,
      title: 'Mock Appointment',
      description: 'Appointment Location',
      start: new Date(new Date() - 300*60*1000).toJSON(),
      end: new Date(new Date() - 300*60*1000).toJSON()
    },
    {
      id: 2,
      userID: 2,
      title: 'Mock Appointment',
      description: 'Appointment Location',
      start: new Date(new Date() - 300*60*1000).toJSON(),
      end: new Date(new Date() - 300*60*1000).toJSON()
    },
  ],
  day: new Date(new Date() - 300*60*1000).toJSON().slice(0, 10),
})
