import { PerfilUsuario } from '../../../domain/models/PerfilUsuario.js';
import { ObjectId } from 'mongodb';

export class MongoPerfilUsuarioRepository {
  constructor(mongoClient, dbName) {
    this.collection = mongoClient.db(dbName).collection('usuarios');
  }

  async findById(id) {
    const doc = await this.collection.findOne({ _id: new ObjectId(id) });
    return doc ? new PerfilUsuario({ ...doc, id: doc._id }) : null;
  }

  async findByCorreo(correoInstitucional) {
    const doc = await this.collection.findOne({ correoInstitucional });
    return doc ? new PerfilUsuario({ ...doc, id: doc._id }) : null;
  }

  async create(user) {
    const { insertedId } = await this.collection.insertOne(user);
    return new PerfilUsuario({ ...user, id: insertedId });
  }
}
