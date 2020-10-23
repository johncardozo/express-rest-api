// Importar express
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// Creación de la aplicación
const app = express();

// Middleware para procesar el body de las peticiones
app.use(bodyParser.json());

// Rutas
const homeRoute = require("./routes/home");
const tareasRoute = require("./routes/tareas");

// Middleware de rutas
app.use("/", homeRoute);
app.use("/tareas", tareasRoute);

// Conexión a la base de datos
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Conectado a la base de datos...");
  }
);

// Inicio del servidor
app.listen(3000);
