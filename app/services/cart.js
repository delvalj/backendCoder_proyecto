const DaoCartMongoose = require("../daos/daoMongooseCart");
const DaoProductsMongoose = require("../daos/daoMongoose");

class CartService {
  constructor() {
    this.dao = new DaoCartMongoose();
    this.daoProd = new DaoProductsMongoose();
  }

  listAllProducts = async (username) => {
    let allCarts = await this.dao.getAll();
    const carritoFound = allCarts.find(
      (carrito) => carrito.userCart == username
    );
    // console.log(carritoFound)
    return carritoFound;
    // if (products === []) {
    //   return "Carrito Vacio";
    // }
    // return products;
  };

  addProductCart = async (data) => {
    const { username, id } = data;

    let carritos = await this.dao.getAll();
    let usersCart = await carritos.filter(
      (carrito) => carrito.userCart === username
    );
    // console.log(usersCart);
    let prod = await this.daoProd.getById(id);
    console.log(prod, "soy el producto");

    if (usersCart[0].products.length <= 0) {
      await usersCart[0].products.push(prod[0]);
      await this.dao.addProduct(username, prod[0]);
      // await this.dao.save(productSave);
    } else {
      const newProducts = usersCart[0].products;
      await newProducts.push(prod[0]);
      await this.dao.addProduct(username, newProducts);
      console.log(usersCart[0].products);
    }

    // console.log(usersCart[0].products, "soy el userCart");
  };

  deleteOneProduct = async (username, idProduct) => {
    const carritos = await this.dao.getAll();

    const carritoUser = carritos.filter(
      (carrito) => carrito.userCart === username
    );

    let products = carritoUser[0].products;
    const newProduct = products.filter((prod) => prod._id != idProduct);
    products = newProduct;
    console.log(newProduct);
    this.dao.update(username, products);
  };
}

module.exports = { CartService };
