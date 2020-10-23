const express = require("express");
const Tarea = require("../models/tarea");

// Creación del router
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Crea el objeto
    const tarea = new Tarea({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      fecha: req.body.fecha,
    });
    // Guarda el objeto en la base de datos
    let resultado = await tarea.save();
    // Retorna la respuesta al cliente
    res.json(resultado);
  } catch (error) {
    // Retorna el error al cliente
    res.status(500).send(error);
  }
});

// Obtener todas las tareas
router.get("/", (req, res) => {
  res.send("TAREAS");
});

// Exportar el router
module.exports = router;
