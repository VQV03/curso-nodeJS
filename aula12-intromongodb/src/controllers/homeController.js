const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Um titulo de teste',
    descricao: 'Uma descricao de testes.'
})
    .then(dados => console.log(dados))
        .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    console.log('Respondendo ao cliente')
    res.render('index');
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