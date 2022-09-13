const { httpError } = require("../helpers/handleErrors");

const {listAllProducts, createCarrito} = require("../services/cart");

const getCart = async (req, res) => {
  // const name = req.session.passport.user;
  try {
    let products = await listAllProducts();
    await res.render("carrito", { products: products });
  } catch (e) {
    httpError(res, e);
  }
};

const createCart = async (req, res) => {
  const data = req.body;
try {
  await createCarrito(data);
  res.redirect('http://localhost:8080/products');
} catch (e) {
  httpError(res, e);
}
};

module.exports = {
  getCart,
  createCart
}
