export const getProyectos = (proyectoRepo) => async () => {
  try {
    return await proyectoRepo.findAll();
  } catch (error) {
    console.error("[❌] Error al obtener proyectos:", error);
    throw new Error("Error al obtener los proyectos.");
  }
};
