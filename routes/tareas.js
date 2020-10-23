const express = require("express");

// Creación del router
const router = express.Router();

// Creación de ruta
router.get("/", (req, res) => {
  res.send("TAREAS");
});

// Exportar el router
module.exports = router;