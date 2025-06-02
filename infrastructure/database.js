const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || 'DashboardService';

module.exports = async function connectDB() {
  try {
    const fullUri = `${MONGODB_URI}/${DB_NAME}`;

    await mongoose.connect(fullUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: DB_NAME
    });

    console.log(`✅ Conectado a MongoDB: ${fullUri}`);
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB', error);
    process.exit(1);
  }
};
