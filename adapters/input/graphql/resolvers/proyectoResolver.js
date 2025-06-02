module.exports = (
  getProyectos,
  getProyectoById,
  crearProyecto,
  actualizarProyecto,
  eliminarProyecto,
  repo
) => ({
  Query: {
    proyectos: () => getProyectos(repo),
    proyecto: (_, { id }) => getProyectoById(repo, id)
  },
  Mutation: {
    crearProyecto: (_, { input }) => crearProyecto(repo, input),
    actualizarProyecto: (_, { id, input }) => actualizarProyecto(repo, id, input),
    eliminarProyecto: (_, { id }) => eliminarProyecto(repo, id)
  }
});
