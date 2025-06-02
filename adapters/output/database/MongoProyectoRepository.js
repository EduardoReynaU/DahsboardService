const Proyecto = require('../../../domain/models/Proyecto');

class MongoProyectoRepository {
  constructor(mongoModel) {
    this.mongoModel = mongoModel;
  }

  async getAllProyectos() {
    const docs = await this.mongoModel.find({});
    return docs.map(doc => new Proyecto({ id: doc._id, ...doc._doc }));
  }

  async getProyectoById(id) {
    const doc = await this.mongoModel.findById(id);
    return doc ? new Proyecto({ id: doc._id, ...doc._doc }) : null;
  }

  async crearProyecto(data) {
    const created = await this.mongoModel.create(data);
    return new Proyecto({ id: created._id, ...created._doc });
  }

  async actualizarProyecto(id, data) {
    const updated = await this.mongoModel.findByIdAndUpdate(id, data, { new: true });
    return updated ? new Proyecto({ id: updated._id, ...updated._doc }) : null;
  }

  async eliminarProyecto(id) {
    await this.mongoModel.findByIdAndDelete(id);
    return true;
  }
}

module.exports = MongoProyectoRepository;
