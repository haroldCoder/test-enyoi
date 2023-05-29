const { Router } = require("express")
const router = Router();

router.route("/type-documents")
.get()

router.route("/type-pqrs")
.get()

router.route("/registers")
.get()

router.route("/pqrs")
.get()

router.route("/pqrs/:id")
.get()
.delete()

router.route("/pqrs/delete-ids")
.delete()