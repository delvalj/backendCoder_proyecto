const { Router } = require("express");
const routerRegister = Router();
const passport = require("../middlewares/passport");

const { UsersController } = require("../controllers/login");

class RouterRegister {
  constructor() {
    this.controller = new UsersController();
  }

  config() {
    console.log('hola')
    // routerRegister.get("/login", this.controller.getRegister);
    routerRegister.get("/register", this.controller.getRegister);
    routerRegister.get("/errorRegister", this.controller.getErrorRegister);

    // routerSession.get('/:id', getProduct);
    routerRegister.post(
      "/register",
      passport.authenticate("register", {
        failureRedirect: "/errorRegister",
        failureMessage: true,
      }),
      this.controller.registerUser
    );
    return routerRegister;
  }
}
// routerSession.patch('/:id', updateProduct);
// routerSession.delete('/:id', deleteProduct);

module.exports = RouterRegister;
