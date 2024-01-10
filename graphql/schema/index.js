const { gql } = require("apollo-server");

const schema = gql`
  type Recipe {
    id: ID!
    name: String!
    description: String
  }

  input recipeInput {
    name: String
    description: String
  }

  type Query {
    recipe(id: ID!): Recipe!
    recipes: [Recipe!]!
  }

  type Mutation {
    addRecipe(input: recipeInput): Recipe!
    deleteRecipe(id: ID!): Boolean!
    updateRecipe(id: ID, input: recipeInput): Recipe!
  }
`;

module.exports = schema;
