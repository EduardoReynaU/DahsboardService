const mongoose = require('mongoose');

const ConvocatoriaSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  fechaLimite: String,
  idProyecto: String,
  idUsuario: String,
  convocados: [String],
  equipo: [String]
});

module.exports = mongoose.model('Convocatoria', ConvocatoriaSchema);
