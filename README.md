# Projeto Consulta Estações- MyDestiny

## Descrição 
API desenvolvida para o projeto final do curso Backend em JavaScript {Reprograma}.

## MyDestiny

    Hoje em dia as plataformas e trens do metrô de São Paulo estão mal sinalizadas, causando alguns atrasos 
    no dia a dia de alguns usuários. O desenho do mapa da linha do trem ficam geralmente em cima da porta 
    do vagão ou então tem uma foto da linha na plataforma, porém as vezes ficam escondidas, ou muito longes 
    de onde os usuário costumam passar. O que acontece no cotidiano é pessoas desinformadas, as vezes pessoas
    de fora de São Paulo dependerem de pedir informação para algum outro usuário, procurar um funcionário 
    do metrô quando se perdem ou quando não sabem em que sentido deve seguir sua viagem.

    Pensando nisso, foi desenvolvido uma API que basicamente retorna todas as estações da linha, inicialmente 
    a linha 1 Azul do Metrô, onde o usuário poderá visualizar as estações, não precisando se esforçar 
    para tentar enxergar em cima da porta, ou procurar o mapa pela plataforma.

    Futuramente será desenvolvido a parte de consulta rápida de sentido, onde a pessoa vai conseguir colocar
    a estação onde se encontra, e o destino que gostaria de ir, mostrando como resultado o sentido certo,
    otimizando o tempo do usuário.

    Exemplo: Origem (Santana) --> Destino (Santa Cruz) --> Resultado (Sentido Jabaquara)


## Arquitetura MVC

Arquitetura MVC
        |
        \--📂 PROJETOFINAL
            |   README.md  
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   *server.js*
            \--📂 node_modules
            \--📂src
                |
                |   *app.js*
                |
                |
                📂---controller
                |       **estacoesController.js
                |       **consultaSentido.js
                |      
                |
                📂---model
                |       **estacoesSchema.js
                |  
                |       
                |
                📂---routes
                |       **estacoesRoute.js
                |       **index.js
                |       

    
## Especificações do Projeto

### Entregáveis 

- Consulta de todas as estações da linha 1 Azul do metrô de São Paulo;
- Cadastrar uma nova estação de metrô;
- Atualizar alguma propiedade da estação;
- Deletar uma estação;

### Desejáveis

- Consulta de sentido, através do input de dados com o frontend de origem e destino, 
mostrando o sentido correto a se seguir;
- QRCode que facilita o acesso e a visualização da API no metrô;
- Cadastrar "Destinos" favoritos para deixar guardado no acesso, para ter um acesso 
mais rápido.

## Pré requisitos

Segue a lista de ferramentas que é importante estarem instalados para a API poder funcionar:
-Git
-Node.js
-Mongodb
-VSCode(para poder manusear o código)

## Rotas

-Local: http://localhost:5555
-Mongodb: mongodb://localhost:27017/Reprograma
-Heroku: https://consulta-metro.herokuapp.com/

## Tecnologias utilizadas

-JavaScript
-Node.js
-Git/GitHub
-Mongodb
-Mongoose
-Express
-dotenv
-cors
-body-parser
-heroku

## Aprendizados

-Estruturar o projeto com a arquitetura MVC 
-READ(Consultar/Ler)
-CREATE(Criar)
-UPDATE(Atualizar)
-DELETE(Deletar)

## Agradecimentos 

-Equipe inteira da {Reprograma}, professoras, monitoras, Ceci, Ju e Jô que são um grupo de mulheres incríveis!
-XP por topar ser um parceiro de um projeto lindo
-Alunas da On6-xp, mulheres extremamente inspiradoras, que me fizeram chegar até aqui.


