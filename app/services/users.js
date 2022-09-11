const { containerUsers } = require("../main");

const listAllUsers = async () => {
  let users = await containerUsers.getAll();
  if (users === []) {
    return "No hay Usuarios";
  }
  return users;
};

const listOneUser = async (id) => {
  let user = await containerUsers.getById(id);
  if (user === []) {
    return "usuario con Id";
  }
  return user;
};


const createNewUser = async (data) => {
  const { username, email, password, address, age, phone } = data;
  const newUser = {
    username,
    email,
    password,
    address,
    age,
    phone,
  };
  await containerUsers.save(newUser);
  return newUser;
};

const deleteOneUser = async (id) => {
  if (!id) {
    res.send("Error while deleting one user.");
  }
  return await containerUsers.deleteById(id);
};

module.exports = { listAllUsers, createNewUser, deleteOneUser, listOneUser };
