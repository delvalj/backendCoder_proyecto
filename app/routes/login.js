const express = require("express");
const routerLogin = express.Router();
const passport = require("../middlewares/passport");

const { getLogin, userLogin, getErrorLogin } = require("../controllers/login");

routerLogin.get("/login", getLogin);

routerLogin.get("/errorLogin", getErrorLogin, );

routerLogin.post(
  "/login",
  passport.authenticate("authenticate", { 
    failureRedirect: "/errorLogin",
    failureMessage: true,
  }), 
    userLogin,
);

module.exports = routerLogin;
