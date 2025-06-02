module.export =  async function rechazarConvocado(repo, convocatoriaId, userId) {
  const convocatoria = await repo.getConvocatoriaById(convocatoriaId);
  if (!convocatoria) throw new Error('Convocatoria no encontrada');

  // Quitar al usuario del array de convocados
  convocatoria.convocados = convocatoria.convocados.filter(id => id !== userId);

  // Guardar cambios
  const actualizada = await repo.actualizarConvocatoria(convocatoriaId, convocatoria);

  return actualizada;
}
