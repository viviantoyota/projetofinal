const mongoose = require("mongoose")
const Schema = mongoose.Schema

const estacoesSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    cor_linha: {
        type: String,
        required: true,
    },
    numero_estacao: {
        type: Number,
        required: true
    }
    
})


const estacoesCollections = mongoose.model('estacoes', estacoesSchema)

module.exports = estacoesCollections