const { httpError } = require("../helpers/handleErrors");

const {
  listAllProducts,
  createProducts,
  deleteOneProduct,
  listOneProduct,
} = require("../services/products");

const getProducts = async (req, res) => {
  // esta logica no anda bien, arreglar el redirect porque no me redirect nada
  // const name = ;
  if (req.session.passport.user) {
    try {
      let products = await listAllProducts();
      await res.render("main", { products: products, username: req.session.passport.user });
    } catch (e) {
      httpError(res, e);
    }
  } else {
    res.redirect("http://localhost:8080/login");
  }
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await listOneProduct(id);
    res.send(product);
  } catch (err) {
    res.send("FAILED IN GET PRODUCT BY ID");
  }
};

const createProduct = async (req, res) => {
  const data = req.body;
  try {
    await createProducts(data);
    res.redirect("http://localhost:8080/products");
  } catch (e) {
    httpError(res, e);
  }
};

const updateProduct = (req, res) => {};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteOneProduct(id);
    res.send("Producto Eliminado");
  } catch (err) {
    res.send("FAILEDD");
  }
};  

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
