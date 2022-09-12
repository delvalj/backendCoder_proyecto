const { httpError } = require("../helpers/handleErrors");

const getRegister = async (req, res) => {
    try {
      res.render("register", {});
    } catch (e) {
      httpError(res, e);
    }
};

const getErrorRegister = async (req, res) => {
      try {
        res.render("errorRegister", {});
      } catch (e) {
        httpError(res, e);
      }
  };

const registerUser = async (req, res) => {
    res.redirect('http://localhost:8080/login');
}

// ----------------------- // LOGIN // ---------------------------// 

const getLogin = async (req, res) => {
    res.render("login", {});
}

const userLogin = async (req, res) => {
    res.redirect('http://localhost:8080/products');
}

const getErrorLogin = async (req, res) => {
      try {
        res.render("errorLogin", {});
      } catch (e) {
        httpError(res, e);
      }
  };


module.exports = {
  getRegister,
  registerUser,
  getErrorRegister,
  getLogin,
  userLogin,
  getErrorLogin
};
