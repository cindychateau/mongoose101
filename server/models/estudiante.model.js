const mongoose = require("mongoose");

const EsquemaEstudiante = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number
}, { timestamps: true, versionKey:false });

const Estudiante = mongoose.model("estudiantes", EsquemaEstudiante);

//Exportando el objeto Estudiante
module.exports = Estudiante;