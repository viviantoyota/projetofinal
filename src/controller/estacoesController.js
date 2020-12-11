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
    const estacaoBody = request.body 
    const estacao = new estacoesCollection(estacaoBody)

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

const atualizarEstacao = (request, response)=>{
    const estacaoAtualizada = request.body
    const numero_estacao = request.params.numero_estacao

    const numeroEstacoes = estacoes.map(estacoes => estacoes.numero_estacao)
    
    const atualizaId = numero.indexOf(numero_estacao)

    const estacaoAtualizadacomNumero = {id, ...estacaoAtualizada}
    musicas.splice(atualizaId, 1, estacaoAtualizadacomNumero)

    response.status(200).send(estacoes.find(estacoes => estacoes.numero_estacao === numero_estacao))
    console.log(estacoes)
     

}

const deletarEstacao = (request, response) => {
    const { id } = requisicao.params;
 
     const estacoesFiltradas = estacoesCollection.filter(estacoes => {
     return estacoes.id == id;
     })[0];
 
     const index = estacoesCollection.indexOf(estacoesFiltradas);
   
     estacoesCollection.splice(index, 1)
 
     resposta.json(estacoesCollection)
}




module.exports = {
    getAll,
    addEstacao,
    atualizarEstacao,
    deletarEstacao
}
