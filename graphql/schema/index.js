const { gql } = require("apollo-server");

const schema = gql`
  type Recipe {
    id: ID!
    name: String!
    description: String
  }

  input recipeInput {
    name: String!
    description: String
  }

  type Query {
    recipes: [Recipe!]!
  }

  type Mutation {
    addRecipe(input: recipeInput): [Recipe!]!
  }
`;

module.exports = schema;
