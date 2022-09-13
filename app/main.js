// const MongooseCart = require("./containers/cart/daoCartMongoose");
const MongooseProducts = require("./models/products");
const MongooseUsers = require("./models/users");
const MongooseCart = require("./models/cart");

let containerCart=  new MongooseCart();
let containerProducts= new MongooseProducts();
let containerUsers = new MongooseUsers();

// module.exports = {containerCart, containerProd , containerSession}

module.exports = { containerUsers , containerProducts, containerCart }