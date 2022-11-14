export const schema = gql`
  type Task {
    id: Int!
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
    title: String!
    description: String!
    duration: Int!
    priority: Int!
    completed: Boolean!
    dueDate: DateTime!
  }

  input UpdateTaskInput {
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
