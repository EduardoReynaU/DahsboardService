class Convocatoria {
  constructor({ id, titulo, descripcion, fechaLimite, idProyecto, idUsuario, convocados, equipo }) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaLimite = fechaLimite;
    this.idProyecto = idProyecto;
    this.idUsuario = idUsuario;
    this.convocados = convocados;
    this.equipo = equipo;
  }
}

module.exports = Convocatoria;
