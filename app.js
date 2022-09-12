require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
const cp = require("cookie-parser");
const bodyParser = require("body-parser");


const session = require("express-session");
const passport = require("./app/middlewares/passport");

const { dbConnect } = require("./config/mongo.js");
const { engine } = require("express-handlebars");
const {DB_URI, SECRET} = process.env;

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

const routerProducts = require('./app/routes/products')
const routerUsers = require('./app/routes/users')
const routerSession = require('./app/routes/session')

// app.use("/api", require("./app/routes"));
app.use("/products", routerProducts);
app.use("/users", routerUsers);
app.use("/session", routerSession);
// app.use("/login", routerLogin);
// app.use("/register", routerRegister);

dbConnect();
app.listen(PORT, () => {
  console.log("API Running ", PORT);
});
