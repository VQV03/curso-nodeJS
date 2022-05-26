//Ao contrario do es6 q eu requisitava arquivos atraves do import, no node eu requiro modulos atraves do require()
/*const mod1 = require('./mod1.js');
const falaNome = mod1.falaNome;
console.log(falaNome());*/

const path = require('path');
const axios = require('axios')
const {Pessoa} = require('./mod1.js');

const p1 = new Pessoa ('Vitor');
console.log(p1)

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
        .catch(e => {console.log(e)})