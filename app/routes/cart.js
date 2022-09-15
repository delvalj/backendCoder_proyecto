const express = require("express");
const routerCart = express.Router();
// const passport = require("../middlewares/passport");

const { getCart, createCart, deleteCartProduct } = require("../controllers/cart");

routerCart.get("/", getCart);
routerCart.post("/", createCart);
routerCart.delete('/eliminarCarrito/:id', deleteCartProduct); 

// routerCart.post(
//   "/login",
//   passport.authenticate("authenticate", { 
//     failureRedirect: "/errorLogin",
//     failureMessage: true,
//   }), 
//     userLogin,
// );

module.exports = routerCart;
