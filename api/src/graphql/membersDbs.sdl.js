export const schema = gql`
  type MembersDb {
    id: Int!
    email: String!
    phone: Int
    name: String!
    street_address: String!
    suburb: String!
    state: String!
    postcode: Int!
  }

  type Query {
    membersDbs: [MembersDb!]!
    membersDb(id: Int!): MembersDb
  }

  input CreateMembersDbInput {
    email: String!
    phone: Int
    name: String!
    street_address: String!
    suburb: String!
    state: String!
    postcode: Int!
  }

  input UpdateMembersDbInput {
    email: String
    phone: Int
    name: String
    street_address: String
    suburb: String
    state: String
    postcode: Int
  }

  type Mutation {
    createMembersDb(input: CreateMembersDbInput!): MembersDb!
    updateMembersDb(id: Int!, input: UpdateMembersDbInput!): MembersDb!
    deleteMembersDb(id: Int!): MembersDb!
  }
`
