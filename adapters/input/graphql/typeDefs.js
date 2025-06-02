const { gql } = require('apollo-server');

module.exports = gql`
  type Proyecto {
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

  type Query {
    proyectos: [Proyecto]
    proyecto(id: ID!): Proyecto
  }

  type Mutation {
    crearProyecto(input: ProyectoInput!): Proyecto
    actualizarProyecto(id: ID, input: ProyectoInput!): Proyecto
    eliminarProyecto(id: ID!): Boolean
  }


  type Convocatoria {
    id: ID!
    titulo: String
    descripcion: String
    fechaLimite: String
    idProyecto: ID!
    idUsuario: ID!
    convocados: [ID]
    equipo: [ID]
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
  extend type Query {
    convocatorias: [Convocatoria]
    convocatoria(id: ID!): Convocatoria
  }

  extend type Query {
    convocatoriasPorConvocado(correo: String!): [Convocatoria]
}


  extend type Mutation {
    crearConvocatoria(input: ConvocatoriaInput!): Convocatoria
    actualizarConvocatoria(id: ID!, input: ConvocatoriaInput!): Convocatoria
    eliminarConvocatoria(id: ID!): Boolean
  }
  extend type Mutation {
    aceptarConvocado(idConvocatoria: ID!, userId: ID!, datosCorreo: DatosCorreoConvocatoria!): Convocatoria
    rechazarConvocado(idConvocatoria: ID!, userId: ID!): Convocatoria
  } 


`;
