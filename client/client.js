const axios = require("axios");

// CREA UNA TAREA
async function crearTarea() {
  try {
    // Hace la petición al Rest API
    let respuesta = await axios.post("http://localhost:3000/tareas", {
      titulo: "pasear",
    });
    // Muestra el resultado
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

// OBTIENE TODAS LAS TAREAS
async function obtenerTodaslasTareas() {
  try {
    // Hace la petición al Rest API
    let tareas = await axios.get("http://localhost:3000/tareas");
    // Muestra las tareas
    console.log(tareas.data);
  } catch (error) {
    console.log(error);
  }
}

// OBTIENE UNA LAS TAREA
async function obtenerTarea(id) {
  try {
    // Hace la petición al Rest API
    let tarea = await axios.get(`http://localhost:3000/tareas/${id}`);
    // Muestra la tarea
    console.log(tarea.data);
  } catch (error) {
    console.log(error);
  }
}

// MODIFICAR UNA TAREA
async function modificarTarea(id) {
  try {
    // Hace la petición al Rest API
    let respuesta = await axios.patch(`http://localhost:3000/tareas/${id}`, {
      titulo: "walking",
    });
    // Muestra el resultado
    console.log(respuesta.data);
  } catch (error) {
    console.log(error);
  }
}

// ELIMINAR UNA TAREA
async function eliminarTarea(id) {
  try {
    // Hace la petición al Rest API
    let respuesta = await axios.delete(`http://localhost:3000/tareas/${id}`);
    // Muestra el resultado
    console.log(respuesta.data);
  } catch (error) {
    console.log(error);
  }
}
//crearTarea();
obtenerTodaslasTareas();
//obtenerTarea('5f926234c8d7e2e7ecfb4eab');
//modificarTarea('5f926c060913e4ea3e7f93c4');
//eliminarTarea('5f925f0d2d7376e74edccd8c');
