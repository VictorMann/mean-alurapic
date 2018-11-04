var mongoose = require('mongoose');

module.exports = function (app) {

    var api = {};
    var model = mongoose.model('Usuario');
    var jwt = require('jsonwebtoken');
    
    api.autentica = function (req, res) {
    
        model.findOne({
            login: req.body.login,
            senha: req.body.senha
        })
        .then(
            usuario => {
                if (!usuario) {
                    console.log('Login e senha inválidos');
                    res.sendStatus(401);
                    return;
                }
                var token = jwt.sign(usuario.login, app.get('secret'), {
                    // 24hrs
                    expiresIn: 84600
                });

                console.log('Token criado e sendo enviado no header de resposta');
                res.set('x-access-token', token);
                res.end();
            },
            erro => {
                console.log('Login e senha inválidos');
                res.sendStatus(401);
            }
        );
    };

    api.verificaToken = function (req, res, next) {

        var token = req.headers['x-access-token'];
        
        if (token) {
            console.log('Verficando Token...');
    
            jwt.verify(token, app.get('secret'), function (err, decoded) {
                if (err) {
                    console.log('Token rejeitado');
                    res.sendStatus(401);
                    return;
                }
                req.usuario = decoded;
                next();
            });

        } else {
            console.log('Token nao foi enviado');
            res.sendStatus(401);
        }
    };

    return api;
}