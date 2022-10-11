const { Router } = require("express");
const routerChat = Router();
const isLogged = require('../middlewares/isLogged')

const { ChatController } = require("../controllers/chat");

class RouterChat {
  constructor() {
    this.controller = new ChatController();
  }

  config() {
    routerChat.get("/", isLogged ,this.controller.getChat);

    return routerChat;
  }
}

module.exports = RouterChat;
