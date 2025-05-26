export const proyectoResolver = ({ getProyectosUseCase }) => ({
  Query: {
    proyectos: async () => {
      return await getProyectosUseCase();
    }
  }
});
