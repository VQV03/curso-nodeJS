//req.params:
//req.query:
//req.body:

const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.use(routes);

//        Criar   ler   atualizar  apagar
//CRUD -> CREATE, READ, UPDATE,    DELETE
//        POST    GET   PUT        DELETE

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

//Instalar express: npm install express
//Instalar nodemon: npm install nodemon --save-dev
//Opcao 1: Rodar o nodemon: npx nodemon server.js
//Opcao 2: colocar: "start": "nodemon server.js" no script no package.json e dps usar: npm start