const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Um titulo de teste',
    descricao: 'Uma descricao de testes.'
})
    .then(dados => console.log(dados))
        .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este sera o <span style="color: red;">titulo</span> da pagina',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
    // res.send(`
    //     <form action = "/" method = "POST">
    //         Nome do cliente: <input type="text" name="nome"><br>
    //         Idade: <input type="text" name="idade">
    //         <button>Envia</button>
    //     </form>
    // `);
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return
};