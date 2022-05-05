const express = require("express");
const app = express();

//Inicializa BD
require("./server/config/mongoose.config");

//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Importamos rutas
const misRutas = require("./server/routes/estudiante.routes");

misRutas(app);

//Ejecutamos server
app.listen(8000, () => console.log("Servidor listo!"));