const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");
const connect = require("./config/db");
dotenv.config();

const typeDefs = require("./graphql/schema/index");
const resolvers = require("./graphql/resolvers/index");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req?.headers.authorization
      ? auth(req?.headers?.authorization)
      : null;

    return { userId: token?.userId };
  },
});

server
  .listen()
  .then(({ url }) => console.log(`Appolo server running at ${url}`));

connect();
