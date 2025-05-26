export const convocatoriaResolver = ({ getConvocatoriasUseCase, registrarConvocatoriaUseCase }) => ({
  Query: {
    convocatorias: async (_, { estudianteId }) => {
      return await getConvocatoriasUseCase(estudianteId);
    }
  },
  Mutation: {
    registrarConvocatoria: async (_, { estudianteId, convocatoriaId }) => {
      return await registrarConvocatoriaUseCase(estudianteId, convocatoriaId);
    }
  }
});
