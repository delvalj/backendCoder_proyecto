require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
const {dbConnect} = require('./config/mongo.js')

const { engine } = require("express-handlebars");

// Views Engine
app.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: "index.hbs",
    })
  );

app.set("views", __dirname + "/public/hbs_views");
app.set("view engine", "hbs");

// Va a buscar en la carpeta PUBLIC si existe el archivo buscado.
app.use(express.static("public"));

// ROUTER
app.use('/api', require('./app/routes'))

dbConnect()
app.listen(PORT , () => {
    console.log('API Running ', PORT)
})