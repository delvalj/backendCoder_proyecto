
const path = require('path');

require("dotenv").config({
  path: path.resolve(__dirname, process.env.NODE_ENV + ".env"),
});

const express = require("express");
const cors = require("cors");
const app = express();

const { PORT } = require("./config/index");

const cp = require("cookie-parser");
const bodyParser = require("body-parser");

const session = require("express-session");
const passport = require("./app/middlewares/passport");

const { dbConnect } = require("./config/mongo.js");
const { engine } = require("express-handlebars");
const { DB_URI, SECRET } = process.env;

// Views Engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
  })
);

const MongoStore = require("connect-mongo");

app.set("views", __dirname + "/public/hbs_views");
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cp());

// Va a buscar en la carpeta PUBLIC si existe el archivo buscado.
app.use(express.static("public"));

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: DB_URI,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
    secret: SECRET,
    resave: true,
    // rolling: true,
    cookie: {
      maxAge: 90000,
    },
    saveUninitialized: true,
  })
);

app.use(passport.session());
app.use(passport.initialize());

// const routerProducts = require("./app/routes/products");
const RouterProducts = require("./app/routes/products")
const RouterUsers = require("./app/routes/users");


const routerSession = require("./app/routes/session");
const routerLogin = require("./app/routes/login");
const routerCart = require("./app/routes/cart");

const routerProducts = new RouterProducts();
const routerUsers = new RouterUsers();

// app.use("/api", require("./app/routes"));
app.use("/products", routerProducts.config());
app.use("/users", routerUsers.config());
app.use("/", routerSession);
app.use("/", routerLogin);
app.use("/cart", routerCart);

dbConnect();
const server = app.listen(PORT, () => {
  console.log("API Running ", PORT);
});

server.on("error", (err) => {
  console.log(err.message);
});
