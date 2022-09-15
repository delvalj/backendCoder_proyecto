const { Router } = require("express");
const routerProducts = Router();

const {
  ProductsController,
} = require("../controllers/products");

class RouterProducts {
  constructor() {
    this.controller = new ProductsController();
  }

  config() {
    routerProducts.get("/", this.controller.getProducts);

    routerProducts.get("/test", this.controller.test);

    // routerProducts.get("/:id", getProduct);

    // routerProducts.post("/", createProduct);

    // routerProducts.patch("/:id", updateProduct);

    // routerProducts.delete("/:id", deleteProduct);

    return routerProducts;
  }
}

module.exports = RouterProducts;
