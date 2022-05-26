/*const nome = 'Vitor';
const sobrenome = 'Queiroz';

const falaNome = () => {
    return this.nome + ' ' + this.sobrenome 
};

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(exports);*/


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

//formas para exportar
module.exports.nome = 'Vitor';
exports.Pessoa = Pessoa;
this.sobrenome = 'Queiroz'

let v1 = 'v1'
let v2 = 'v4'
let v3 = 'v5'
let v4 = 'v5'
let v5 = 'v5'

//Caso eu tenha mts variaveis eu posso exportar tds de uma vez da seguinte forma:
module.exports = {
    v1, v2, v3, v4, v5
};