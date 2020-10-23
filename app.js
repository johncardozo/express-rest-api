// Importar express
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

// Creación de la aplicación
const app = express();

// Middlewares

// Ruta inicial
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/tareas", (req, res) => {
  res.send("tareas");
});

// Conexión a la base de datos
mongoose.connect(process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Conectado a la base de datos...");
  }
);

// Inicio del servidor
app.listen(3000);
