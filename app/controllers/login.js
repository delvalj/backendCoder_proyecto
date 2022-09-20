const { httpError } = require("../helpers/handleErrors");

const PORT = process.env.PORT || 8080;

// ----------------------- // REGISTER // ---------------------------//

// ----------------------- // LOGIN // ---------------------------//

class UsersController {
  constructor() {}

  getLogin = async (req, res) => {
    res.render("login", {});
  };

  userLogin = async (req, res) => {
    res.redirect(`http://localhost:${PORT}/products`);
  };

  getErrorLogin = async (req, res) => {
    try {
      res.render("errorLogin", {});
    } catch (e) {
      httpError(res, e);
    }
  };

  getRegister = async (req, res) => {
    try {
      res.render("register", {});
    } catch (e) {
      httpError(res, e);
    }
  };

  getErrorRegister = async (req, res) => {
    try {
      res.render("errorRegister", {});
    } catch (e) {
      httpError(res, e);
    }
  };

  registerUser = async (req, res) => {
    res.redirect(`http://localhost:${PORT}/login`);
  };
}

module.exports = {
  UsersController,
};
