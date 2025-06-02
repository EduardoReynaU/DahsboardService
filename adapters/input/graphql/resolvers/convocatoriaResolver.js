module.exports = (
  getConvocatorias,
  getConvocatoriaById,
  crearConvocatoria,
  actualizarConvocatoria,
  eliminarConvocatoria,
  aceptarConvocado,
  rechazarConvocado,
  getConvocatoriasPorConvocado,
  repo
) => ({
  Query: {
    convocatorias: () => getConvocatorias(repo),
    convocatoria: (_, { id }) => getConvocatoriaById(repo, id),
    convocatoriasPorConvocado: (_, { correo }) => getConvocatoriasPorConvocado(repo, correo) // ✅ Agregado aquí
  },
  Mutation: {
    crearConvocatoria: (_, { input }) => crearConvocatoria(repo, input),
    actualizarConvocatoria: (_, { id, input }) => actualizarConvocatoria(repo, id, input),
    eliminarConvocatoria: (_, { id }) => eliminarConvocatoria(repo, id),

    // Nuevas mutaciones:
    aceptarConvocado: (_, { idConvocatoria, userId, datosCorreo }) =>
      aceptarConvocado(repo, idConvocatoria, userId, datosCorreo),

    rechazarConvocado: (_, { idConvocatoria, userId }) =>
      rechazarConvocado(repo, idConvocatoria, userId)
  }
});
