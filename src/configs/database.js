console.log('entrei no database.....')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/Reprograma'
console.log('estou na url:', DB_URL)

const connect = () => {
    mongoose.connect(DB_URL,
        {  useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
            
        })
    const connection = mongoose.connection
    connection.on('error', () => console.error("Erro ao se conectar ao MongoDb"))
    connection.once('open', () => console.log('Estamos conectados ao Mongo'))
}

console.log('estou apos a connection,')
module.exports = { connect }