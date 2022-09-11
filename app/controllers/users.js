const { httpError } = require("../helpers/handleErrors");
const { listAllUsers, listOneUser,  createNewUser , deleteOneUser} = require("../services/users");

const getUsers = async (req, res) => {
  try {
    let users = await listAllUsers();
    res.send(users)
    // res.render("main", { users: users });
  } catch (e) {
    httpError(res, e);
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    let user = await listOneUser(id);
    res.send(user)
  }
  catch (err) {
    res.send('FAILEDDD');
  }
};

const createUser = async (req, res) => {
  const data = req.body;
try {
  let newUser = await createNewUser(data);
  res.send(newUser);
} catch (e) {
  httpError(res, e);
}
};

const updateUser = (req, res) => {};

const deleteUser =  async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    await deleteOneUser(id);
    // await containerProducts.deleteById(product);
    res.send('User deleted')
  }
  catch (err) {
    res.send('FAILEDD');
  }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
