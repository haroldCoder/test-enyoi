const pqrs = {};
const db = require("../DB/connection");

pqrs.getDocumentsType = (req, res) =>{
    db.query("SELECT Tipo FROM pqrs", (err, result)=>{
        if(err) throw err, res.send(err);
        res.status(200).json(result);
    })
}

pqrs.typePqrs = () =>{}

pqrs.Registers = (req, res) => {
    const {ide, tipo_doc, nombre, apellidos, numero, tel, email, titulo, ticket, content_ticket, estado} = req.body;

    db.query(`INSERT INTO pqrs(IDE, Tipo, Nombre, Apellidos, Numero, Tel, Email, Titulo, Ticket, Content_ticket, Estado) 
    VALUES(${ide}, "${tipo_doc}", "${nombre}", "${apellidos}", ${numero}, ${tel}, "${email}", "${titulo}", "${ticket}", "${content_ticket}", ${estado})`, (err, result)=>{
        if(err) throw err, res.send(err), res.status(500);
        else
            res.status(200).send("pqrs Ingresada");
    });
}

pqrs.getPqrs = (req, res) =>{
    db.query(`SELECT * FROM pqrs`, (err, result)=>{
        if(err) throw err;
        else 
            res.status(200).send(result);
    });
}

pqrs.getPqr = (req, res) =>{
    const {id} = req.params;
    db.query(`SELECT * FROM pqrs WHERE ID = ${id}`, (err, result)=>{
        if(err) throw err;
        else 
            res.status(200).send(result);
    });
}

pqrs.deletePqr = (req, res) =>{
    const {id} = req.params;

    db.query(`DELETE FROM pqrs WHERE ID = ${id}`, (err, result)=>{
        if(err) throw err, res.send(err)
        else
            res.status(200).send("Pqrs Eliminada");
    })
}

pqrs.deletePqrs = (req, res) =>{

}

module.exports = pqrs;