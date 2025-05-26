import dotenv from 'dotenv';
dotenv.config();

import { startGraphQLServer } from './infrastructure/graphqlServer.js';
import { mongoClient, databaseName } from './infrastructure/database.js';

import { MongoProyectoRepository } from './adapters/output/database/MongoProyectoRepository.js';
import { MongoPerfilUsuarioRepository } from './adapters/output/database/MongoPerfilUsuarioRepository.js';
import { MongoConvocatoriaRepository } from './adapters/output/database/MongoConvocatoriaRepository.js';

import { getProyectos } from './app/getProyectos.js';
import { getPerfilUsuario } from './app/getPerfilUsuario.js';
import { getConvocatorias } from './app/getConvocatorias.js';
import { registrarConvocatoria } from './app/registrarConvocatoria.js';

// Inyección de dependencias (Repositorios)
const proyectoRepo = new MongoProyectoRepository(mongoClient, databaseName);
const perfilUsuarioRepo = new MongoPerfilUsuarioRepository(mongoClient, databaseName);
const convocatoriaRepo = new MongoConvocatoriaRepository(mongoClient, databaseName);

// Inyección de dependencias (Casos de uso)
const useCases = {
  getProyectosUseCase: getProyectos(proyectoRepo),
  getPerfilUsuarioUseCase: getPerfilUsuario(perfilUsuarioRepo),
  getConvocatoriasUseCase: getConvocatorias(convocatoriaRepo),
  registrarConvocatoriaUseCase: registrarConvocatoria(convocatoriaRepo)
};

// Levantar servidor GraphQL
startGraphQLServer(useCases);
