export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    isVerified: Boolean!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    isVerified: Boolean!
  }

  input UpdateUserInput {
    id: Int!
    name: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    isVerified: Boolean
  }
  input VerifyUserInput {
    isVerified: Boolean
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @skipAuth
    verifyUser(email: String!, input: VerifyUserInput!): User! @skipAuth
  }
`
