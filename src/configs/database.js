
const mongoose = require('mongoose')
const dotenv  =  require('dotenv')

dotenv.config();

const DB_URI = process.env.DB_URI 
const PORT = process.env.PORT

const connect = () => {
    mongoose.connect(DB_URI,
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

