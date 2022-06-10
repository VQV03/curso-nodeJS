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