exports.middlewareGlobal = (req, res, next) => {
    // if(req.body.cliente) {
    //     console.log();
    //     console.log(`Vi que voce postou ${req.body.cliente}`);
    //     console.log();
    // }

    next();
};

exports.outroMiddleware = (req, res, next) => {
    console.log('sou seu poutro middleware');
    next();
};