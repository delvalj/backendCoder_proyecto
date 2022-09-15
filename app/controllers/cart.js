const { httpError } = require("../helpers/handleErrors");

const { listAllProducts, createCarrito } = require("../services/cart");

const getCart = async (req, res) => {
  if (req.session.passport.user) {
    try {
      let products = await listAllProducts();
      await res.render("carrito", { products: products, username: req.session.passport.user });
    } catch (e) {
      httpError(res, e);
    }
  } else {
    res.redirect("http://localhost:8080/login");
  }

  // // const name = req.session.passport.user;
  // try {
  //   let products = await listAllProducts();
  //   await res.render("carrito", { products: products });
  // } catch (e) {
  //   httpError(res, e);
  // }
};

const createCart = async (req, res) => {
  const data = req.body;
  try {
    await createCarrito(data);
    res.redirect("http://localhost:8080/products");
  } catch (e) {
    httpError(res, e);
  }
};

const deleteCartProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteOneProduct(id);
    res.send("Producto Eliminado");
  } catch (err) {
    res.send("FAILEDD");
  }
};

module.exports = {
  getCart,
  createCart,
  deleteCartProduct
};
