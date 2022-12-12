export const schema = gql`
  type Appointment {
    id: Int!
    userID: Int!
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
  }

  type Query {
    appointments: [Appointment!]! @skipAuth
    appointment(userID: Int!): Appointment @skipAuth
  }

  input CreateAppointmentInput {
    userID: Int!
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
  }

  input UpdateAppointmentInput {
    userID: Int
    title: String
    description: String
    start: DateTime
    end: DateTime
  }

  type Mutation {
    createAppointment(input: CreateAppointmentInput!): Appointment! @requireAuth
    updateAppointment(id: Int!, input: UpdateAppointmentInput!): Appointment!
      @requireAuth
    deleteAppointment(id: Int!): Appointment! @requireAuth
  }
`
