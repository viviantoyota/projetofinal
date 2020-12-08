const estacoesCollection = require("../model/estacoesSchema")

/*const getAll = (request, response) => {
    console.log(request.url)

    estacoesCollection.find((error, estacoes) => {
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send({
                mensagem: "GET com sucesso",
                estacoes
            })
        }
    })
}*/

const addEstacao = (request, response) => {
    const estacaobody = request.body //pegando o body que o usuario digitou
    const estacao = new estacoesCollection(estacoesDoBody)//criando um novo dado com o body

    contato.save((error) => {
        if(error) {
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso",
                contato
            })
        }
    })
}

module.exports = {
    //getAll,
    addEstacao
}