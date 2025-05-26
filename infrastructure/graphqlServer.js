import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { typeDefs } from '../adapters/input/graphql/typeDefs.js';
import { proyectoResolver } from '../adapters/input/graphql/resolvers/proyectoResolver.js';
import { perfilUsuarioResolver } from '../adapters/input/graphql/resolvers/perfilUsuarioResolver.js';
import { convocatoriaResolver } from '../adapters/input/graphql/resolvers/convocatoriaResolver.js';
import { connectToDatabase } from './database.js';
import { verifyJWT } from './jwt.js'; // ✅ Asegúrate de tener este helper implementado

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const startGraphQLServer = async (useCases) => {
  await connectToDatabase();

  const app = express();
  app.use(cors());
  app.use(express.static(path.join(__dirname, '../../public')));

  const server = new ApolloServer({
    schema: buildSubgraphSchema({ 
      typeDefs,
      resolvers: [
        proyectoResolver(useCases),
        perfilUsuarioResolver(useCases),
        convocatoriaResolver(useCases)
      ]
    }),
    context: async ({ req }) => {
      const authHeader = req.headers.authorization || '';
      const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

      if (token) {
        try {
          const user = verifyJWT(token); // Decodifica y valida el token
          return { user }; // Disponemos 'user' en todos los resolvers
        } catch (err) {
          console.warn("[AUTH] Token inválido:", err.message);
          return {};
        }
      }
      return {};
    }
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Dashboard Service corriendo en http://localhost:${PORT}/graphql`);
  });
};
