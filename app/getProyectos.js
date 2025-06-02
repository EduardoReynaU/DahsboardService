// app/getProyectos.js
module.exports = async function getProyectos(proyectoRepository) {
  return await proyectoRepository.getAllProyectos();
};
