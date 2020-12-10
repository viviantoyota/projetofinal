const express = require("express")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const app = express()

dotenv.config();
const PORT = process.env.PORT || 5555

const index = require("../projetofinal/src/routes/index")
const estacoes = require("../projetofinal/src/routes/estacoesRoute")


mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true

    })

    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));


app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", index)
app.use("/estacoes", estacoes)

app.listen(PORT,  () => {
    console.log(`O APP esta rodando na porta ${PORT}`)
})

module.exports = app
