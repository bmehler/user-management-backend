const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const { prisma } = require('./prisma');

async function start() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ prisma }),
  });

  const { url } = await server.listen({ port: 4000 });
  console.log(`🚀 Server ready at ${url}`);
}

start();