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
    tasks: [Task!]! @skipAuth
    task(id: Int!): Task @skipAuth
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
    createTask(input: CreateTaskInput!): Task! @skipAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @skipAuth
    deleteTask(id: Int!): Task! @skipAuth
  }
`
