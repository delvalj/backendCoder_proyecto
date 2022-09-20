const mongoose = require("mongoose");
const { MongooseContainer } = require("../container/ContainerMongoose");

const dtoCartScheme = new mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamp: true, __v: false }
);

let instance = null;

class DaoCartMongoose extends MongooseContainer {
  constructor(model) {
    super("cart", dtoCartScheme);
  }

  async save(obj) {
    let col = await this.schema.create(obj);
    await col.save();
  }

  async getById(id) {
    return await this.schema.find({ _id: id }).lean();
  }

  async getAll() {
    return await this.schema.find({}).lean();
  }

  async deleteById(id) {
    await this.schema.deleteOne({ _id: id });
  }
  async deleteAll() {
    await this.schema.deleteMany({});
  }

  async update(id, obj) {
    return await this.schema.updateOne(
      { _id: id },
      { $set: { products: obj } }
    );
  }

  getInstance(){
    if (!instance) instance = new DaoCartMongoose()
    return instance
    }
}

module.exports = DaoCartMongoose;
