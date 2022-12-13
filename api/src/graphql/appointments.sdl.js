export const schema = gql`
  type Appointment {
    id: Int!
    userID: Int!
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    iCal: String!
  }

  type Query {
    appointments: [Appointment!]! @requireAuth
    appointment(id: Int!): Appointment @requireAuth
  }

  input CreateAppointmentInput {
    userID: Int!
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    iCal: String!
  }

  input UpdateAppointmentInput {
    userID: Int
    title: String
    description: String
    start: DateTime
    end: DateTime
    iCal: String
  }

  type Mutation {
    createAppointment(input: CreateAppointmentInput!): Appointment! @requireAuth
    updateAppointment(id: Int!, input: UpdateAppointmentInput!): Appointment!
      @requireAuth
    deleteAppointment(id: Int!): Appointment! @skipAuth
  }
`
