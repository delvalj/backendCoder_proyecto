const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

const {containerUsers} = require('../main')

// const imagenesPath = require('./config/paths.js');
const path = require('path');

  passport.use(
    "registracion",
    new LocalStrategy({ usernameField: "username", passReqToCallback: true },async (req, username, password, callback) => {
 
      const user = await containerUsers.getAll();
    //   if (user) 
    //     return callback(null, false, {
    //       message: "Already Registered",
    //     });
    const userFound = user.find((us) => us.username == username);
    if (userFound){
    return callback(err, false, { message: "USERNAME ALREADY IN USE" });
    }
    
      const imagePath = path.join('/uploads', req.body.username + '.jpg');
      const passwordBcrypt = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

      const newUser = {
        username: username,
        password: passwordBcrypt,
        nombre: req.body.nombre,
        address: req.body.address,
        age: req.body.age,
        phone: req.body.phone,
        image: imagePath,
      };
      await containerUsers.metodoSave(newUser);
      return callback(null, newUser);

    //   containerSession.metodoSave(username, passwordBcrypt, req.body.nombre, req.body.address, req.body.phone, req.body.age , imagePath);
    //   const nuevoUsuario = { username, password: passwordBcrypt, nombre: req.body.nombre, address: req.body.address, phone: req.body.phone, age: req.body.age , image: imagePath};
    //   callback(null, nuevoUsuario);
    })
  );

  passport.use(
    "autenticate",
    new LocalStrategy(async (username, password, done) => {
      const users = await containerUsers.getAll();
      const userFound = users.find((us) => us.username == username);
      if (!userFound || !bcrypt.compareSync(password, userFound.password)) {
        return done(null, false, { message: "NOT FOUND" });
      }else{
      return done(null, userFound);
      }
    })
  );
  

  passport.serializeUser((newUser, done) => {
    done(null, newUser.username);
  });

  passport.deserializeUser(async (username, done) => {
    const users = await containerUsers.getAll();
    const user = users.find((us) => us.username == username);
    return done(null, user);
  });

module.exports = passport;
