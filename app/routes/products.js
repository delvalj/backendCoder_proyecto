const { Router } = require("express");
const routerProducts = Router();

const {ProductsController} = require("../controllers/products");

class RouterProducts {
  constructor() {
    this.controller = new ProductsController();
  }

  config() {
    routerProducts.get("/", this.controller.getProducts);

    routerProducts.get("/test", this.controller.test);

    routerProducts.get("/:id", this.controller.getProduct);

    routerProducts.post("/", this.controller.createProduct);

    routerProducts.patch("/:id", this.controller.updateProduct);

    routerProducts.delete("/:id", this.controller.deleteProduct);

    return routerProducts;
  }
}

module.exports = RouterProducts;
