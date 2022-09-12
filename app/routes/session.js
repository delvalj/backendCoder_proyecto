const express = require("express");
const routerSession = express.Router();
const passport = require("../middlewares/passport");

const {
  getRegister,
  registerUser,
  getErrorRegister,

} = require("../controllers/login");
routerSession.get("/register", getRegister);

routerSession.get("/errorRegister", getErrorRegister);

// routerSession.get('/:id', getProduct);

routerSession.post(
  "/register",
  passport.authenticate("register", {
    failureRedirect: "/errorRegister",
    failureMessage: true,
  }),
  registerUser
);
// routerSession.patch('/:id', updateProduct);
// routerSession.delete('/:id', deleteProduct);

module.exports = routerSession;
