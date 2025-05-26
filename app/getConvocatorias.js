export const getConvocatorias = (convocatoriaRepo) => async (estudianteId) => {
  try {
    return await convocatoriaRepo.findByEstudianteId(estudianteId);
  } catch (error) {
    console.error("[❌] Error al obtener convocatorias:", error);
    throw new Error("Error al obtener las convocatorias.");
  }
};
