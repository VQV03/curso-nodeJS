const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/write.js');
const ler = require('./modules/read.js');

const pessoas = [
    {nome: 'Vitor'}, 
    {nome: 'Ricardo'},
    {nome: 'Matheus'},
    {nome: 'Maria'},
    {nome: 'Gerson'},
    {nome: 'Luiz'},
    {nome: 'Otavio'},
    {nome: 'Fabio'},
    {nome: 'Eduardo'},
];

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);    
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);
