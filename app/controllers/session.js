const { httpError } = require("../helpers/handleErrors");

const getRegister = async (req, res) => {
    res.render("register", {});
  //   try {
  //     // let products = await listAllProducts();
  //   } catch (e) {
  //     httpError(res, e);
  //   }
};

const getErrorRegister = async (req, res) => {
    res.render("errorRegister", {});

    //   try {
    //     // let products = await listAllProducts();
    //   } catch (e) {
    //     httpError(res, e);
    //   }
  };

const registerUser = async (req, res) => {
    res.redirect('http://localhost:8080/session/login');
}

// ----------------------- // LOGIN // ---------------------------// 

const getLogin = async (req, res) => {
    res.render("login", {});
}

const userLogin = async (req, res) => {
    res.redirect('http://localhost:8080/products');
}

const getErrorLogin = async (req, res) => {
    res.render("errorLogin", {});

    //   try {
    //     // let products = await listAllProducts();
    //   } catch (e) {
    //     httpError(res, e);
    //   }
  };


module.exports = {
  getRegister,
  registerUser,
  getErrorRegister,
  getLogin,
  userLogin,
  getErrorLogin
};
