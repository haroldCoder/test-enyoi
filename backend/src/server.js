const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const {PORT} = require("./DB/credentials");

app.use(bodyParser.json());
app.use(cors())

app.use("/apipqrs", require("./routes/pqrs.route"));

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
})