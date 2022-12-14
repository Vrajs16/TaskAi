export const schema = gql`
  type Event {
    id: String!
    summary: String!
    description: String
    start: String!
    end: String!
  }

  type Events {
    code: String!
    events: [Event!]
  }

  type Query {
    getEvents(start: String!, end: String!, code: String!): Events! @skipAuth
  }
`
