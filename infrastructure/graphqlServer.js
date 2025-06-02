const { ApolloServer } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { mergeResolvers } = require('@graphql-tools/merge');
const typeDefs = require('../adapters/input/graphql/typeDefs');

// -------------------- Proyectos --------------------
const getProyectos = require('../app/getProyectos');
const getProyectoById = require('../app/getProyectoById');
const crearProyecto = require('../app/crearProyecto');
const actualizarProyecto = require('../app/actualizarProyecto');
const eliminarProyecto = require('../app/eliminarProyecto');

const MongoProyectoRepository = require('../adapters/output/database/MongoProyectoRepository');
const ProyectoModel = require('./models/ProyectoModel');
const proyectoRepository = new MongoProyectoRepository(ProyectoModel);

const proyectoResolver = require('../adapters/input/graphql/resolvers/proyectoResolver')(
  getProyectos,
  getProyectoById,
  crearProyecto,
  actualizarProyecto,
  eliminarProyecto,
  proyectoRepository
);

// -------------------- Convocatorias --------------------
const getConvocatorias = require('../app/getConvocatorias');
const getConvocatoriaById = require('../app/getConvocatoriaById');
const crearConvocatoria = require('../app/crearConvocatoria');
const actualizarConvocatoria = require('../app/actualizarConvocatoria');
const eliminarConvocatoria = require('../app/eliminarConvocatoria');
const aceptarConvocado = require('../app/aceptarConvocado');
const rechazarConvocado = require('../app/rechazarConvocado');
const getConvocatoriasPorConvocado = require('../app/getConvocatoriasPorConvocado');

const MongoConvocatoriaRepository = require('../adapters/output/database/MongoConvocatoriaRepository');
const ConvocatoriaModel = require('./models/ConvocatoriaModel');
const convocatoriaRepository = new MongoConvocatoriaRepository(ConvocatoriaModel);

const convocatoriaResolver = require('../adapters/input/graphql/resolvers/convocatoriaResolver')(
  getConvocatorias,
  getConvocatoriaById,
  crearConvocatoria,
  actualizarConvocatoria,
  eliminarConvocatoria,
  aceptarConvocado,
  rechazarConvocado,
  getConvocatoriasPorConvocado,
  convocatoriaRepository
);

// -------------------- Unir todos los resolvers --------------------
const resolvers = mergeResolvers([proyectoResolver, convocatoriaResolver]);

// -------------------- Crear servidor Apollo Federation --------------------
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
});

module.exports = server;
