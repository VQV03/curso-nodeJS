exports.middlewareGlobal = (req, res, next) => {
   res.locals.umaVariavelLocal = 'Este e o valor da varialvel local'

    next();
};

exports.outroMiddleware = (req, res, next) => {
    console.log('sou seu poutro middleware');
    next();
};