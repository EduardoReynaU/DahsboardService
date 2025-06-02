// index.js
require('dotenv').config();
const server = require('./infrastructure/graphqlServer');
const connectDB = require('./infrastructure/database');

async function startServer() {
  await connectDB();
  const { url } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`🚀 Servidor corriendo en ${url}`);
}

startServer();
