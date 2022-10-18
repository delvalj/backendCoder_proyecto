const { Router } = require("express");
const routerCart = Router();

const { CartController } = require("../controllers/cart");

class RouterCart {
  constructor() {
    this.controller = new CartController();
  }

  config() {
    routerCart.get("/", this.controller.getCart);
    routerCart.post("/:username/:id", this.controller.addProductCart);
    routerCart.post("/:id", this.controller.deleteCartProduct);

    // routerProducts.get("/test", this.controller.test);
    // routerProducts.get("/:id", this.controller.getCart);
    // routerCart.post("/", this.controller.addProductCart);
    // routerProducts.patch("/:id", this.controller.updateCart);
    return routerCart;
  }
}

module.exports = RouterCart;
