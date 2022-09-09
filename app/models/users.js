const mongoose = require("mongoose");
const ContainerMongoose = require("../persistance/users")

const UserScheme = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true },
  },
  {
    timestamps: true,
    __v: false,
  }
);

const model = mongoose.model('users', UserScheme); 

class MongooseUsers extends ContainerMongoose{
  constructor() {    
      super(model) 
    }
  }

module.exports= MongooseUsers;