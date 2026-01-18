const { prisma } = require('./prisma');

const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
    user: async (_, { id }) => {
      return prisma.user.findUnique({
        where: { id: Number(id) },
      });
    },
  },

  Mutation: {
    createUser: async (_, { input }) => {
      const { name, email } = input;
      return prisma.user.create({
        data: { name, email },
      });
    },

    updateUser: async (_, { id, input }) => {
      const { name, email } = input;
      return prisma.user.update({
        where: { id: Number(id) },
        data: {
          ...(name !== undefined ? { name } : {}),
          ...(email !== undefined ? { email } : {}),
        },
      });
    },

    deleteUser: async (_, { id }) => {
      try {
        await prisma.user.delete({
          where: { id: Number(id) },
        });
        return true;
      } catch (e) {
        return false;
      }
    },
  },
};

module.exports = { resolvers };