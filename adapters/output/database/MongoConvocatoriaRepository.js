import { Convocatoria } from '../../../domain/models/Convocatoria.js';
import { ObjectId } from 'mongodb';

export class MongoConvocatoriaRepository {
  constructor(mongoClient, dbName) {
    this.collection = mongoClient.db(dbName).collection('convocatorias');
  }

  async findByEstudianteId(estudianteId) {
    const docs = await this.collection.find({ estudianteId }).toArray();
    return docs.map(doc => new Convocatoria({ ...doc, id: doc._id }));
  }

  async registrarConvocatoria(estudianteId, convocatoriaId) {
    const result = await this.collection.insertOne({
      estudianteId,
      convocatoriaId,
      estado: 'pendiente', // Estado inicial por defecto
      medioContacto: 'No definido' // Valor por defecto, si deseas
    });
    return !!result.insertedId;
  }
}
