export const perfilUsuarioResolver = ({ getPerfilUsuarioUseCase, loginUserUseCase, registerUserUseCase }) => ({
  Query: {
    perfilUsuario: async (_, { id }) => {
      return await getPerfilUsuarioUseCase(id);
    }
  },
  Mutation: {
    loginUser: async (_, { input }) => {
      const { token, user } = await loginUserUseCase(input);
      return { token, user };
    },
    registerUser: async (_, { input }) => {
      const { token, user } = await registerUserUseCase(input);
      return { token, user };
    }
  }
});
