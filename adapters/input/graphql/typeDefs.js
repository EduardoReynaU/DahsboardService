import { gql } from 'graphql-tag';

export const typeDefs = gql`
  directive @key(fields: ID!) on OBJECT | INTERFACE

  type Proyecto @key(fields: id) {
    id: ID!
    titulo: String!
    descripcion: String!
    organizador: String!
    duracion: String!
    habilidades: [String!]!
    beneficios: String!
    modalidad: String!
    fecha: String!
  }

  type PerfilUsuario @key(fields: id) {
    id: ID!
    correoInstitucional: String!
    carrera: String
    ciclo: String
    habilidades: [String!]
  }

  type Convocatoria @key(fields: id) {
    id: ID!
    titulo: String!
    estado: String!
    medioContacto: String!
    estudianteId: ID!
  }

  type Query {
    proyectos: [Proyecto!]!
    perfilUsuario(id: ID!): PerfilUsuario
    convocatorias(estudianteId: ID!): [Convocatoria!]!
  }

  type Mutation {
    registrarConvocatoria(estudianteId: ID!, convocatoriaId: ID!): Boolean!
  }
`;
