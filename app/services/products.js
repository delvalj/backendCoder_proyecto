const DaoProductsMongoose = require("../daos/daoMongoose");

class ProductsService {
  constructor() {
    this.dao = new DaoProductsMongoose();
  }

  test = () => {
    return 'JUEGUE LA T';
  };

   listAllProducts = async () => {
    let products = await this.dao.getAll();
    if (products === []) {
      return "No hay Produuctos";
    }
    return products;
  };
  
   listOneProduct = async (id) => {
    let products = await this.dao.getById(id);
    if (products === []) {
      return "Producto con Id ";
    }
    return products;
  };
  
   createProducts = async (data) => {
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
    if(!id){
      res.send('Error en Eliminar producto.')
    }
    return await this.dao.deleteById(id);
  };
}

module.exports = ProductsService;
