const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo101", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conexión con DB"))
    .catch(err => console.log("No se pudo conectar con DB "+err));