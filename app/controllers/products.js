const { httpError } = require("../helpers/handleErrors");
// const userModel = require("../models/users");
const {containerProducts} = require("../main")

const getProducts = async (req, res) => {
    try {
      const listAll = await containerProducts.getAll();
        res.send({ data: listAll })
      } catch (e) {
        httpError(res, e);
    }
};

const getProduct = (req, res) => {};

const createProduct = async (req, res) => {
  try {
    const { title, thumbnail, price, description, category  } = req.body;

    const newUser = {
      title,
      thumbnail,
      price,
      description,
      category
    };
    
    await containerProducts.save(newUser);
    res.send({ data: newUser })
  } catch (e) {
    httpError(res, e);
  }
};

const updateProduct = (req, res) => {};

const deleteProduct = (req, res) => {};

module.exports = { getProducts, getProduct, createProduct, updateProduct , deleteProduct };
