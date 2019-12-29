const { gql } = require('apollo-server-express');
// Construct a schema, using GraphQL schema language
module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phonenumber: String!
    address: String!
    zipcode: String!
  }

  type Query {
    getUsers: [User]
  }
 
  type Mutation {
    addUser(userInput: CreateUserInput): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
    phonenumber: String!
    address: String!
    zipcode: String!
  }
`;