const { Router } = require("express");
const routerChat = Router();

const { ChatController } = require("../controllers/chat");

class RouterChat {
  constructor() {
    this.controller = new ChatController();
  }

  config() {
    routerChat.get("/", (req, res) => {
      res.render("chat");
    });

    return routerChat;
  }
}

module.exports = RouterChat;
