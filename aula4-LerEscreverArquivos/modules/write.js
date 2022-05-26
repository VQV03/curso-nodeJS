const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w', encoding: 'utf8'}); 
};
/*encoding: 'utf8' ja vai por padrao, porem pode ser usado outros encoding*/
//w: sobrecresve
//a: adiciona


