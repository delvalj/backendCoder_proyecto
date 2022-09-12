const express =  require('express');
const routerLogin = express.Router();
const passport = require("../middlewares/passport");

const { getLogin, userLogin , getErrorLogin } = require('../controllers/session')

routerLogin.get('/', getLogin );

routerLogin.get("/errorLogin", getErrorLogin);

routerLogin.post(
    "/",
    passport.authenticate("authenticate", {
      failureRedirect: "/login/errorLogin",
      failureMessage: true,
    }),
    userLogin
  );



// routerProducts.get('/:id', getProduct);

// routerProducts.post('/login', passport.authenticate("authenticate", {
//     failureRedirect: "/errorLogin",
//     failureMessage: true,
//   }), createProduct);
// // routerProducts.patch('/:id', updateProduct);
// // routerProducts.delete('/:id', deleteProduct); 

module.exports = routerLogin