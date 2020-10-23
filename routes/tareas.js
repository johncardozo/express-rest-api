const express = require("express");
const Tarea = require("../models/tarea");

// Creación del router
const router = express.Router();

// OBTIENE TODAS LAS TAREAS
router.get("/", async (req, res) => {
  try {
    // Obtiene todas las tareas
    const tareas = await Tarea.find();
    // retorna la respuesta al cliente
    res.json(tareas);
  } catch (error) {
    // Retorna el error al cliente
    res.status(500).send(error);
  }
});

// OBTIENE UNA TAREA DADO EL ID
router.get("/:id", async (req, res) => {
  try {
    // Obtiene una tarea por su id
    const tarea = await Tarea.findById(req.params.id);
    // retorna la respuesta al cliente
    res.json(tarea);
  } catch (error) {
    // Retorna el error al cliente
    res.status(500).send(error);
  }
});

// CREA UNA TAREA
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

// ELIMINA UNA TAREA
router.delete("/:id", async (req, res) => {
  try {
    // Elimina la tarea dado su id
    const resultado = await Tarea.remove({ _id: req.params.id });
    // Retorna la respuesta al cliente
    res.json(resultado);
  } catch (error) {
    // Retorna el error al cliente
    res.status(500).send(error);
  }
});

// ACTUALIZA UNA TAREA
router.patch("/:id", async (req, res) => {
  try {
    // Actualiza la tarea dado su id
    const resultado = await Tarea.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    // Retorna la respuesta al cliente
    res.json(resultado);
  } catch (error) {
    // Retorna el error al cliente
    res.status(500).send(error);
  }
});

// Exportar el router
module.exports = router;