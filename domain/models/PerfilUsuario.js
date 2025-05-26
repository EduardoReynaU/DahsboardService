export class PerfilUsuario {
  constructor({ id, correoInstitucional, carrera, ciclo, habilidades, password }) {
    this.id = id;
    this.correoInstitucional = correoInstitucional;
    this.carrera = carrera;
    this.ciclo = ciclo;
    this.habilidades = habilidades || [];
    this.password = password; // Nota: Esto solo es utilizado por el servicio de auth, lo dejamos por compatibilidad.
  }
}
