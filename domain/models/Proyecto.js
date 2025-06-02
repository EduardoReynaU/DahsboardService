class Proyecto {
  constructor({ id, titulo, descripcion, organizador, duracion, habilidades, beneficios, modalidad, fecha, usuarioId }) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.organizador = organizador;
    this.duracion = duracion;
    this.habilidades = habilidades;
    this.beneficios = beneficios;
    this.modalidad = modalidad;
    this.fecha = fecha;
    this.usuarioId = usuarioId;
  }
}

module.exports = Proyecto;
