//req.params:
//req.query:
//req.body:

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

//        Criar   ler   atualizar  apagar
//CRUD -> CREATE, READ, UPDATE,    DELETE
//        POST    GET   PUT        DELETE

app.get('/', (req, res) => {
    res.send(`
        <form action = "/" method = "POST">
            Nome do cliente: <input type="text" name="nome">
            <button>Envia</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
   console.log(req.params); 
   console.log(req.query); 
   res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que voce me enviou foi ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

//Instalar express: npm install express
//Instalar nodemon: npm install nodemon --save-dev
//Opcao 1: Rodar o nodemon: npx nodemon server.js
//Opcao 2: colocar: "start": "nodemon server.js" no script no package.json e dps usar: npm start