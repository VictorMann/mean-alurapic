module.exports = function (app) {

    var api = app.app.api.auth;

    app.get('/autenticar', api.autentica);
    app.use('/*', api.verificaToken);
};