import { ObjectId } from 'mongodb';
import { connectToDatabase, mongoClient, databaseName } from './infrastructure/database.js';

await connectToDatabase();

const db = mongoClient.db(databaseName);

// 🧑 Usuario de prueba
const nuevoUsuario = {
  _id: new ObjectId(),
  correoInstitucional: "maria.rivera@ejemplo.com",
  carrera: "Ingeniería Industrial",
  ciclo: "6to",
  habilidades: ["Organización", "Gestión de proyectos"],
  password: "maria123" // ⚠️ solo para pruebas
};

// 📁 Proyectos nuevos
const nuevosProyectos = [
  {
    _id: new ObjectId(),
    titulo: 'Campamento de liderazgo juvenil',
    descripcion: 'Entrena habilidades de liderazgo con jóvenes de todo el país.',
    organizador: 'Fundación Futuro',
    duracion: '1 de julio - 20 de agosto',
    habilidades: ['Liderazgo', 'Trabajo en equipo'],
    beneficios: 'Constancia oficial',
    modalidad: 'Presencial',
    fecha: '10 de junio'
  },
  {
    _id: new ObjectId(),
    titulo: 'Voluntariado en biblioteca rural',
    descripcion: 'Ayuda a mejorar el acceso a libros y tecnología en zonas alejadas.',
    organizador: 'Red de Bibliotecas Perú',
    duracion: '15 de julio - 30 de agosto',
    habilidades: ['Comunicación', 'Solidaridad'],
    beneficios: 'Experiencia certificada',
    modalidad: 'Virtual',
    fecha: '5 de julio'
  }
];

// 📋 Convocatorias del nuevo usuario
const nuevasConvocatorias = [
  {
    titulo: 'Campamento de liderazgo juvenil',
    estado: 'pendiente',
    medioContacto: 'LinkedIn',
    estudianteId: nuevoUsuario._id
  },
  {
    titulo: 'Voluntariado en biblioteca rural',
    estado: 'aceptado',
    medioContacto: 'Correo institucional',
    estudianteId: nuevoUsuario._id
  }
];

// 🚀 Insertar en la base de datos
await db.collection('usuarios').insertOne(nuevoUsuario);
await db.collection('proyectos').insertMany(nuevosProyectos);
await db.collection('convocatorias').insertMany(nuevasConvocatorias);

console.log("✅ Nuevos datos de prueba insertados correctamente.");
process.exit();
