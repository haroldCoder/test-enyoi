const { Router } = require("express")
const router = Router();
const {getDocumentsType, getPqrs, getPqr, deletePqr, deletePqrs} = require("../controllers/pqrs.controllers")

//creacion de rutas

//primer y tercer endpoint 
router.route("/type-documents")
.post(getDocumentsType)

//cuarto endpoint
router.route("/pqrs")
.get(getPqrs)


router.route("/pqrs/:id")
.get(getPqr) //quinto endpoint
.delete(deletePqr) //sexto endpoint

router.route("/pqrs/delete-ids")
.delete(deletePqrs) //septimo endpoint

module.exports = router;