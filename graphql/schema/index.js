const { gql } = require("apollo-server");

const schema = gql`
  type Recipe {
    id: ID!
    name: String!
    description: String
  }

  type User {
    id: ID!
    username: String!
    password: String
  }

  type Auth {
    token: String
    user: User!
  }

  input recipeInput {
    name: String
    description: String
  }

  type Query {
    recipe(id: ID!): Recipe
    recipes: [Recipe!]!
  }

  type Mutation {
    addRecipe(input: recipeInput): Recipe!
    deleteRecipe(id: ID!): Boolean!
    updateRecipe(id: ID, input: recipeInput): Recipe!
    signup(username: String, password: String): Auth!
    signin(username: String, password: String): Auth!
  }
`;

module.exports = schema;
