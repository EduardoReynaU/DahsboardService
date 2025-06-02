const { enviarCorreoConvocatoria } = require ('../shared/notificationClient.js');

module.exports  = async function aceptarConvocado(repo, convocatoriaId, userId, datosCorreo) {
  const convocatoria = await repo.getConvocatoriaById(convocatoriaId);
  if (!convocatoria) throw new Error('Convocatoria no encontrada');

  // Quitar del array de convocados y agregar a equipo
  convocatoria.convocados = convocatoria.convocados.filter(id => id !== userId);
  convocatoria.equipo.push(userId);

  // Guardar cambios
  const actualizada = await repo.actualizarConvocatoria(convocatoriaId, convocatoria);

  // Enviar correo por gRPC
  try {
    await enviarCorreoConvocatoria({
      emailConvocado: datosCorreo.emailConvocado,
      emailCreador: datosCorreo.emailCreador,
      nombreConvocado: datosCorreo.nombreConvocado,
      nombreCreador: datosCorreo.nombreCreador,
      nombreProyecto: datosCorreo.nombreProyecto,
      estado: 'aceptado'
    });
    console.log('✅ Notificación de aceptación enviada');
  } catch (error) {
    console.error('❌ Error enviando notificación:', error);
  }

  return actualizada;
}
