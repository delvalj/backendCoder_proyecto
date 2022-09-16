const DaoCartMongoose = require("../daos/daoMongooseCart");

class CartService {
  constructor() {
    this.dao = new DaoCartMongoose();
  }
  listAllProducts = async () => {
    let products = await this.dao.getAll();
    if (products === []) {
      return "Carrito Vacio";
    }
    return products;
  };

  createCarrito = async (data) => {
    const { title, thumbnail, price, description, category } = data;

    const newProduct = {
      title: title,
      thumbnail,
      price,
      description,
      category,
    };

    await this.dao.save(newProduct);
    return newProduct;
  };

  deleteOneProduct = async (id) => {
    if (!id) {
      res.send("Error en Eliminar producto.");
    }
    return await this.dao.deleteById(id);
  };
}

module.exports = { CartService };
