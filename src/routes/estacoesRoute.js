const express = require("express")
const router = express.Router()
const controller = require("../controller/estacoesController")

router.get("/", controller.getAll)
router.post("/criar", controller.addEstacao)
//router.patch("/:numero", controller.atualizarEstacao)
router.delete("/:estacao", controller.deletarEstacao)

module.exports = router