exports.paginaInicial = (req, res) => {
    res.send(`
        <form action = "/" method = "POST">
            Nome do cliente: <input type="text" name="nome"><br>
            Idade: <input type="text" name="idade">
            <button>Envia</button>
        </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de post');
};