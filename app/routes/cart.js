const express = require("express");
const routerCart = express.Router();
// const passport = require("../middlewares/passport");

const { getCart, createCart } = require("../controllers/cart");

routerCart.get("/cart", getCart);

routerCart.post('/agregarCarrito', createCart);

// routerCart.post(
//   "/login",
//   passport.authenticate("authenticate", { 
//     failureRedirect: "/errorLogin",
//     failureMessage: true,
//   }), 
//     userLogin,
// );

module.exports = routerCart;
