const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  organizador: String,
  duracion: String,
  habilidades: [String],
  beneficios: [String],
  modalidad: String,
  fecha: String,
  usuarioId: String
});

module.exports = mongoose.model('proyectos', ProyectoSchema);
