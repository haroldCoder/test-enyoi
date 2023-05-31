const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const {PORT} = require("./DB/credentials");

//se activan los cors y el json para las respuestas
app.use(bodyParser.json());
app.use(cors())

//se utilizan las rutas en la ruta principal
app.use("/apipqrs", require("./routes/pqrs.route"));

//se levanta el servidor
app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
})