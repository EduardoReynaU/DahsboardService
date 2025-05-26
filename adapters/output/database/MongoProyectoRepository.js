import { Proyecto } from '../../../domain/models/Proyecto.js';

export class MongoProyectoRepository {
  constructor(mongoClient, dbName) {
    this.collection = mongoClient.db(dbName).collection('proyectos');
  }

  async findAll() {
    const docs = await this.collection.find().toArray();
    console.log('[DEBUG] Proyectos desde Mongo:', proyectos);
    return docs.map(doc => new Proyecto({ ...doc, id: doc._id }));
  }
}
