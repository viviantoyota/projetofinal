const estacoesCollection = require("../model/estacoesSchema")

const getAll = (request, response) => {
    console.log(request.url)

    estacoesCollection.find((error, estacoes) => {
       console.log("estou no getalll")
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send({
                mensagem: "GET com sucesso",
                estacoes
            })
        }
    })
}

const addEstacao = (request, response) => {
    const estacaoBody = request.body //pegando o body que o usuario digitou
    const estacao = new estacoesCollection(estacaoBody)//criando um novo dado com o body

    estacao.save((error) => {
        if(error) {
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso",
                estacao
            })
        }
    })
}

/*const atualizarEstacao = (request, response)=>{
    const estacaoAtualizada = request.body
    const numero_estacao = request.params.numero_estacao

    const numeroEstacoes = estacoes.map(estacoes => estacoes.numero_estacao)
    
    const atualizaId = numero.indexOf(numero_estacao)

    //const estacaoAtualizadacomNumero = {id, ...estacaoAtualizada}
    //musicas.splice(atualizaId, 1, estacaoAtualizadacomNumero)

    response.status(200).send(estacoes.find(estacoes => estacoes.numero_estacao === numero_estacao))
    console.log(estacoes)
     

}*/

const deletarEstacao = (req, res) => {
    const {error} = model.deleteData(req.params.id)
    if(error===null) {
        res.status(204).send("Registro removido com sucesso.")
    } else {
        res.status(404).json({"message": error.message})
    }
}

module.exports = {
    getAll,
    addEstacao,
    //atualizarEstacao,
    deletarEstacao
    
}

//TEM QUE ATUALIZAR SAUDE E TIRAR A estacao
//TEM QUE COLOCAR O NUMERO DA ESTCAO TUCURUVI