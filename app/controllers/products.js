const { httpError } = require("../helpers/handleErrors");
const { listAllProducts, createProducts, deleteOneProduct, listOneProduct } = require("../services/products");

const getProducts = async (req, res) => {
  try {
    let products = await listAllProducts();
    res.render("main", { products: products });
  } catch (e) {
    httpError(res, e);
  }
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await listOneProduct(id);
    res.send(product)
  }
  catch (err) {
    res.send('FAILED IN GET PRODUCT BY ID');
  }
};

const createProduct = async (req, res) => {
    const data = req.body;
  try {
    let newProduct = await createProducts(data);
    res.send(newProduct);
  } catch (e) {
    httpError(res, e);
  }
};

const updateProduct = (req, res) => {};

const deleteProduct =  async (req, res) => {
  const id = req.params.id;
  try {
    await deleteOneProduct(id);
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
