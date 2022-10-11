const { httpError } = require("../helpers/handleErrors");
const ChatDaoMongoose = require("../daos/daoChatMongoose");

const { ChatService } = require("../services/chat");

class ChatController {
  constructor() {
    this.controller = new ChatService();
  }

  getChat = async (req, res) => {
    const email = req.user.email;
    await this.controller.listAllMsgs();
    res.render("chat", {username : email });
  };

  //   getUsers = async (req, res) => {
  //   try {
  //     let users = await this.servicio.listAllUsers();
  //     res.send(users);
  //     // res.render("register", { users: users });
  //   } catch (e) {
  //     httpError(res, e);
  //   }
  // };
}

module.exports = { ChatController };
