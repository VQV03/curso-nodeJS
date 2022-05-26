const express = require('express');
const app = express();

//        Criar   ler   atualizar  apagar
//CRUD -> CREATE, READ, UPDATE,    DELETE
//        POST    GET   PUT        DELETE

app.get('/', (req, res) => {
    res.send(`
        <form action = "/" method = "POST">
            Nome do cliente: <input type="text" name="nome">
            <button>Envia</button>
        </form>
    `)
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario')
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});

//Instalar express: npm install express
//Instalar nodemon: npm install nodemon --save-dev
//Opcao 1: Rodar o nodemon: npx nodemon server.js
//Opcao 2: colocar: "start": "nodemon server.js" no script no package.json e dps usar: npm start