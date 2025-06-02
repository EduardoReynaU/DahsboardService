const { gql } = require('apollo-server');

module.exports = gql`
  # ---------- ENTIDADES ----------
  type Proyecto @key(fields: "id") {
    id: ID!
    titulo: String
    descripcion: String
    organizador: String
    duracion: String
    habilidades: [String]
    beneficios: [String]
    modalidad: String
    fecha: String
    usuarioId: ID
  }

  type Convocatoria @key(fields: "id") {
    id: ID!
    titulo: String
    descripcion: String
    fechaLimite: String
    idProyecto: ID!
    idUsuario: ID!
    convocados: [ID]
    equipo: [ID]
  }

  # ---------- INPUTS ----------
  input ProyectoInput {
    titulo: String
    descripcion: String
    organizador: String
    duracion: String
    habilidades: [String]
    beneficios: [String]
    modalidad: String
    fecha: String
    usuarioId: ID
  }

  input ConvocatoriaInput {
    titulo: String
    descripcion: String
    fechaLimite: String
    idProyecto: ID!
    idUsuario: ID!
    convocados: [ID]
    equipo: [ID]
  }

  input DatosCorreoConvocatoria {
    emailConvocado: String!
    emailCreador: String!
    nombreConvocado: String!
    nombreCreador: String!
    nombreProyecto: String!
  }

  # ---------- QUERY ----------
  extend type Query {
    proyectos: [Proyecto]
    proyecto(id: ID!): Proyecto

    convocatorias: [Convocatoria]
    convocatoria(id: ID!): Convocatoria
    convocatoriasPorConvocado(correo: String!): [Convocatoria]
  }

  # ---------- MUTATION ----------
  extend type Mutation {
    crearProyecto(input: ProyectoInput!): Proyecto
    actualizarProyecto(id: ID, input: ProyectoInput!): Proyecto
    eliminarProyecto(id: ID!): Boolean

    crearConvocatoria(input: ConvocatoriaInput!): Convocatoria
    actualizarConvocatoria(id: ID!, input: ConvocatoriaInput!): Convocatoria
    eliminarConvocatoria(id: ID!): Boolean

    aceptarConvocado(idConvocatoria: ID!, userId: ID!, datosCorreo: DatosCorreoConvocatoria!): Convocatoria
    rechazarConvocado(idConvocatoria: ID!, userId: ID!): Convocatoria
  }
`;
