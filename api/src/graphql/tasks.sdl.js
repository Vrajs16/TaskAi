export const schema = gql`
  type Task {
    id: Int!
    userID: Int!
    isAppointment: Boolean!
    title: String!
    description: String!
    duration: Int!
    priority: Int!
    completed: Boolean!
    dueDate: DateTime!
    createdAt: DateTime!
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
  }

  input CreateTaskInput {
    userID: Int!
    isAppointment: Boolean!
    title: String!
    description: String!
    duration: Int!
    priority: Int!
    completed: Boolean!
    dueDate: DateTime!
    iCalUID: String
  }

  input UpdateTaskInput {
    userID: Int
    isAppointment: Boolean
    title: String
    description: String
    duration: Int
    priority: Int
    completed: Boolean
    dueDate: DateTime
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
