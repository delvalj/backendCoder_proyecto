const { httpError } = require("../helpers/handleErrors");

const { containerProducts } = require("../main");
const { listAllProducts, createProducts, deleteOneProduct } = require("../services/products");

const getProducts = async (req, res) => {
  try {
    let products = await listAllProducts();
    res.render("main", { products: products });
  } catch (e) {
    httpError(res, e);
  }
};

const getProduct = (req, res) => {};

const createProduct = async (req, res) => {
    const data = req.body;
  try {
    let newProduct = createProducts(data);
    await containerProducts.save(newProduct);
    res.send(newProduct);
  } catch (e) {
    httpError(res, e);
  }
};

const updateProduct = (req, res) => {};

const deleteProduct =  async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    await deleteOneProduct(id);
    // await containerProducts.deleteById(product);
    res.send('Producto Eliminado')
  }
  catch (err) {
    res.send('FAILEDD');
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
