const { httpError } = require("../helpers/handleErrors");
const ChatDaoMongoose = require("../daos/daoChatMongoose");

class ChatController {
  constructor() {
    this.controller = new ChatDaoMongoose();
  }
  getChat = async (req, res) => {
    res.render("chat", {});
  };
}

module.exports = { ChatController };
