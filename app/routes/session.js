const express = require("express");
const routerSession = express.Router();
const passport = require("../middlewares/passport");

const {
  getRegister,
  registerUser,
  getErrorRegister,
  getLogin,
  userLogin,
  getErrorLogin,
} = require("../controllers/session");

routerSession.get("/", getRegister);

routerSession.get("/errorRegister", getErrorRegister);

// routerSession.get('/:id', getProduct);

routerSession.post(
  "/",
  passport.authenticate("register", {
    failureRedirect: "/session/errorRegister",
    failureMessage: true,
  }),
  registerUser
);
// routerSession.patch('/:id', updateProduct);
// routerSession.delete('/:id', deleteProduct);

// ----------------------- // LOGIN // ---------------------------//

// routerSession.get("/login", getLogin);




module.exports = routerSession;
