const { containerUsers } = require("../main");

const listAllUsers = async () => {
  let users = await containerUsers.getAll();
  if (users === []) {
    return "No Users Found";
  }
  return users;
};

const listOneUser = async (id) => {
  let user = await containerUsers.getById(id);
  if (user === []) {
    return "User's Id:";
  }
  return user;
};


const createNewUser = async (data) => {
  const { username, email, password, address, age, phone } = data;

  if(!data){
    return "No Information Available."
  }else {
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
  }
};

const deleteOneUser = async (id) => {
  if (!id) {
    res.send("Error while deleting one user.");
  }
  return await containerUsers.deleteById(id);
};

module.exports = { listAllUsers, createNewUser, deleteOneUser, listOneUser };
