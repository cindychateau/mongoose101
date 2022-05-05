const Estudiante = require("../models/estudiante.model"); //Importando modelo de estudiante

//Regresa todos los estudiantes
module.exports.findAllStudents = (req, res) => {
    Estudiante.find()
        .then(allStudents => res.json({estudiantes: allStudents}))
        .catch(err => res.json({message: "Hubo un error "+err}));
};

//Regresa un estudiante en base a su ID
module.exports.findOneStudent = (req, res) => {
    Estudiante.findOne({_id: req.params.id})
        .then(student => res.json({estudiante: student}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

//Crea un estudiante
module.exports.createStudent = (req, res) => {
    Estudiante.create(req.body) 
        .then(student => res.json({estudiante: student}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

//Actualización de estudiante
module.exports.updateStudent = (req, res) => {
    Estudiante.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(student => res.json({estudiante: student}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

//Borrar Usuario
module.exports.deleteStudent = (req, res) => {
    Estudiante.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}