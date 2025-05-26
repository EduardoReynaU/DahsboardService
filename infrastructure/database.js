import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
export const databaseName = process.env.DB_NAME || 'DashboardService';

export const mongoClient = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export async function connectToDatabase() {
  try {
    await mongoClient.connect();
    console.log(`✅ Conectado a MongoDB en ${MONGO_URI}, base de datos: ${databaseName}`);
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
    process.exit(1); // Salimos de la app si falla la conexión
  }
}
