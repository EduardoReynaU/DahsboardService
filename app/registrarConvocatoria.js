export const registrarConvocatoria = (convocatoriaRepo) => async (estudianteId, convocatoriaId) => {
  try {
    const result = await convocatoriaRepo.registrarConvocatoria(estudianteId, convocatoriaId);
    return result; // true o false según éxito de la operación
  } catch (error) {
    console.error("[❌] Error al registrar convocatoria:", error);
    throw new Error("Error al registrar la convocatoria.");
  }
};
