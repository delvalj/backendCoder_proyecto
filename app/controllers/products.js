const { httpError } = require("../helpers/handleErrors");

const ProductsService = require('../services/products')

class ProductsController {
  constructor() {
    this.servicio = new ProductsService();
  }

  test = (req, res) => {
    const resultado = this.servicio.test();
    res.send(resultado);  
  };

  // getProducts = async (req, res) => {
  //   if (req.session.passport.user) {
  //     try {
  //       let products = await listAllProducts();
  //       await res.render("main", {
  //         products: products,
  //         username: req.session.passport.user,
  //       });
  //     } catch (e) {
  //       httpError(res, e);
  //     }
  //   } else {
  //     res.redirect("http://localhost:8080/login");
  //   }
  // };

  getProducts = async (req, res) => {
      try {
        let products = await this.servicio.listAllProducts();
        await res.render("main", {
          products: products,
        });
      } catch (e) {
        httpError(res, e);
      }
      // res.redirect("http://localhost:8080/login");
  };

  // getProduct = async (req, res) => {
  //   const id = req.params.id;
  //   try {
  //     let product = await listOneProduct(id);
  //     res.send(product);
  //   } catch (err) {
  //     res.send("FAILED IN GET PRODUCT BY ID");
  //   }
  // };

  // createProduct = async (req, res) => {
  //   const data = req.body;
  //   try {
  //     await createProducts(data);
  //     res.redirect("http://localhost:8080/products");
  //   } catch (e) {
  //     httpError(res, e);
  //   }
  // };

  // updateProduct = (req, res) => {};

  // deleteProduct = async (req, res) => {
  //   const id = req.params.id;
  //   try {
  //     await deleteOneProduct(id);
  //     res.send("Producto Eliminado");
  //   } catch (err) {
  //     res.send("FAILEDD");
  //   }
  };

  

// }


module.exports = {
  ProductsController,
};
