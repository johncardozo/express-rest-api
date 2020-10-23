const mongoose = require('mongoose');

// Definición del esquema
const TareaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: String,
    terminada: {
        type: Boolean,
        default: false
    },
    fecha: {
        type: Date,
        defaul: Date.now
    }
})

// Exportar el esquema
module.exports = mongoose.model('Tarea', TareaSchema);