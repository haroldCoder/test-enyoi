const { Router } = require("express")
const router = Router();
const {getDocumentsType, getPqrs, getPqr, deletePqr, deletePqrs} = require("../controllers/pqrs.controllers")

//creacion de rutas

//primer y tercer endpoint 
router.route("/type-documents")
.post(getDocumentsType)

router.route("/pqrs/deleteIds")
.delete(deletePqrs) //septimo endpoint


router.route("/pqrs/:id")
.get(getPqr) //quinto endpoint
.delete(deletePqr) //sexto endpoint

//cuarto endpoint
router.route("/pqrs")
.get(getPqrs)

module.exports = router;