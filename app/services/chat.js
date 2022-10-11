const DaoChatMongoose = require("../daos/daoChatMongoose");

class ChatService {
  constructor() {
    this.dao = new DaoChatMongoose();
  }

  listAllMsgs = async () => {
    let chats = await this.dao.getAll();
    if (chats === []) {
      return "No Chats Found";
    }
    return chats;
  };

//   listOneUser = async (id) => {
//     let user = await this.dao.getById(id);
//     if (user === []) {
//       return "User's Id:";
//     }
//     return user;
//   };

//   createNewUser = async (data) => {
//     const { username, email, password, address, age, phone } = data;

//     if (!data) {
//       return "No Information Available.";
//     } else {
//       const newUser = {
//         username,
//         email,
//         password,
//         address,
//         age,
//         phone,
//       };
//       await this.dao.save(newUser);
//       return newUser;
//     }
//   };

//   deleteOneUser = async (id) => {
//     if (!id) {
//       res.send("Error while deleting one user.");
//     }
//     return await this.dao.deleteById(id);
//   };
}

module.exports = { ChatService };
