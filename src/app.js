const express = require("express")
const app = express()
const cors = require("cors")
const db = require('./configs/database')


db.connect()
app.use(cors())
app.use(express.json())


const index = require("./routes/index")
const estacoes = require("./routes/estacoesRoute")

app.use("/", index)
app.use("/estacoes", estacoes)

module.exports = app