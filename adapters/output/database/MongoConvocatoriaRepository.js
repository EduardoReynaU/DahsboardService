const Convocatoria = require('../../../domain/models/Convocatoria');

class MongoConvocatoriaRepository {
  constructor(model) {
    this.model = model;
  }

  async getAllConvocatorias() {
    const docs = await this.model.find({});
    return docs.map(doc => new Convocatoria({ id: doc._id, ...doc._doc }));
  }

  async getConvocatoriaById(id) {
    const doc = await this.model.findById(id);
    return doc ? new Convocatoria({ id: doc._id, ...doc._doc }) : null;
  }

  async crearConvocatoria(data) {
    const created = await this.model.create(data);
    return new Convocatoria({ id: created._id, ...created._doc });
  }

  async actualizarConvocatoria(id, data) {
    const updated = await this.model.findByIdAndUpdate(id, data, { new: true });
    return updated ? new Convocatoria({ id: updated._id, ...updated._doc }) : null;
  }

  async eliminarConvocatoria(id) {
    await this.model.findByIdAndDelete(id);
    return true;
  }

  async getConvocatoriasPorConvocado(correo) {
    const docs = await this.model.find({ convocados: correo });
    return docs.map(doc => new Convocatoria({ id: doc._id, ...doc._doc }));
  }

 
}

module.exports = MongoConvocatoriaRepository;
