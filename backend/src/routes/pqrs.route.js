const { Router } = require("express")
const router = Router();
const {getDocumentsType, typePqrs, Registers, getPqrs, getPqr, deletePqr, deletePqrs} = require("../controllers/pqrs.controllers")

router.route("/type-documents")
.get(getDocumentsType)

router.route("/type-pqrs")
.get(typePqrs)

router.route("/registers")
.get(Registers)

router.route("/pqrs")
.get(getPqrs)

router.route("/pqrs/:id")
.get(getPqr)
.delete(deletePqr)

router.route("/pqrs/delete-ids")
.delete(deletePqrs)