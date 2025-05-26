import { ObjectId } from 'mongodb';
import { connectToDatabase, mongoClient } from './infrastructure/database.js';

await connectToDatabase();

const db = mongoClient.db('AutenService'); // nombre exacto según tu captura

const usuarios = [
  {
    _id: new ObjectId(),
    username: 'usuario_prueba1',
    email: 'prueba1@example.com',
    provider: 'github',
    providerId: 'fake001',
    avatarUrl: 'https://example.com/avatar1.png',
    topLanguages: ['JavaScript', 'Python'],
    createdAt: new Date()
  },
  {
    _id: new ObjectId(),
    username: 'usuario_prueba2',
    email: 'prueba2@example.com',
    provider: 'github',
    providerId: 'fake002',
    avatarUrl: 'https://example.com/avatar2.png',
    topLanguages: ['Go', 'Rust'],
    createdAt: new Date()
  }
];

await db.collection('AutenService').insertMany(usuarios);

console.log('✅ Usuarios insertados correctamente.');
process.exit();
