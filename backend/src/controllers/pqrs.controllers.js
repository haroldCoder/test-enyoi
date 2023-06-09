const pqrs = {};
const db = require("../DB/connection");

pqrs.getDocumentsType = (req, res) =>{
    try{
        const {ide, tipo_doc, nombre, apellidos, numero, tel, email, titulo, ticket, content_ticket, estado} = req.body;

        // Verificar que todos los campos requeridos estén presentes
        if (!ide || !nombre || !apellidos || !numero || !email || !titulo || !ticket || !content_ticket || !estado) {
            return res.status(400).send("Faltan campos requeridos");
        }

        // Validar el formato de los campos con restricciones
        if (tipo_doc !== "T.I" && tipo_doc !== "C.E" && tipo_doc !== "C.C") {
            console.log(tipo_doc);
            return res.status(400).send("Tipo de documento inválido: C.C o T.i o X");
        }

        if (!isValidPhoneNumber(numero)) {
            return res.status(400).send("Teléfono móvil inválido");
        }

        if (!isValidEmail(email)) {
            return res.status(400).send("Correo electrónico inválido");
        }

        // Si todas las validaciones pasan, llamar al segundo endpoint para agregar los datos a la base de datos
        pqrs.Registers(req, res);
    }
    catch(err){
        res.status(500)
        console.log(err);
    }
}

// Función para validar el formato de un número de teléfono
function isValidPhoneNumber(phoneNumber) {
    // Eliminar cualquier carácter que no sea un dígito del número de teléfono
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Verificar si el número de teléfono tiene exactamente 12 dígitos
    return numericPhoneNumber.length === 12;
}

// Función para validar el formato de un correo electrónico
function isValidEmail(email) {
    // Verificar si el correo electrónico contiene el símbolo "@" y la extensión ".com"
    return email.includes('@') && email.endsWith('.com');
}

pqrs.Registers = (req, res) => {
    try{
        //en caso de que no haya errores se trae los argunmentos del body
        const {ide, tipo_doc, nombre, apellidos, numero, tel, email, titulo, ticket, content_ticket, estado} = req.body;

        //se hace la query a la db para ingresar todo lo del body a la db
        db.query(`INSERT INTO pqrs(IDE, Tipo, Nombre, Apellidos, Numero, Tel, Email, Titulo, Ticket, Content_ticket, Estado) 
        VALUES(${ide}, "${tipo_doc}", "${nombre}", "${apellidos}", ${numero}, ${tel}, "${email}", "${titulo}", "${ticket}", "${content_ticket}", "${estado}")`, (err, result)=>{
            if(err) throw err, res.send(err), res.status(500);
            else
                res.status(200).send("pqrs Ingresada"); //en caso de que no hayan errores, responde esto
        });
    }
    catch(err){
        res.status(500).send(err) // si por algun motivo algo falla, envia un status y el mensaje de error
    }
}

pqrs.getPqrs = (req, res) =>{
    db.query(`SELECT * FROM pqrs`, (err, result)=>{ // se ejecuta la query para la busqueda de todos los datos en la tabla pqrs
        if(err) throw err;
        else 
            res.status(200).send(result); // se responde con status 200 y los datos
    });
}

pqrs.getPqr = (req, res) =>{
    const {id} = req.params;
    db.query(`SELECT * FROM pqrs WHERE ID = ${id}`, (err, result)=>{ // consulta para buscar los datos por un id
        if(err) throw err;
        else if(id == null){
            res.status(400).send("no se proporciono ningun id"); // en caso de que no se proporcione ningun id, arroje error
        }
        else 
            res.status(200).send(result);
    });
}

pqrs.deletePqr = (req, res) =>{
    const {id} = req.params;

    db.query(`DELETE FROM pqrs WHERE ID = ${id}`, (err, result)=>{ // eleminar algun dato por su id
        if(err) throw err, res.send(err)
        if(id == null){
            res.status(400).send("no se proporciono ningun id");
        }
        else
            res.status(200).send("Pqr Eliminada");
    })
}

pqrs.deletePqrs = (req, res) =>{
    const { array } = req.body;
    console.log(array);

    if (array.length <= 0) {
        res.status(400).send("No se proporcionó ningún ID");
        return; // Detener la ejecución si no se proporcionó ningún ID
    }

    const deletePromises = array.map(id => {
        return new Promise((resolve, reject) => {
        db.query(`DELETE FROM pqrs WHERE ID = ${id}`, (err, result) => {
            if (err) reject(err);
            else resolve();
        });
        });
    });

    Promise.all(deletePromises)
        .then(() => {
        res.status(200).send("Pqrs eliminadas");
        })
        .catch(err => {
        res.status(500).send(err);
        });
}

module.exports = pqrs;