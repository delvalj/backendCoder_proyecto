const { httpError } = require("../helpers/handleErrors");
// const userModel = require("../models/users");
const {containerUsers} = require("../main")

const getUsers = async (req, res) => {
    try {
      const listAll = await containerUsers.getAll();
        res.send({ data: listAll })
      } catch (e) {
        httpError(res, e);
    }
};

const getUser = (req, res) => {};

const createUser = async (req, res) => {
  try {
    const { username, email, password, address, age, phone } = req.body;

    const newUser = {
      username,
      email,
      password,
      address,
      age,
      phone
    };
    
    await containerUsers.save(newUser);
    res.send({ data: newUser })
  } catch (e) {
    httpError(res, e);
  }
};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
