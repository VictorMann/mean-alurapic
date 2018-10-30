module.exports = function (app) {
    // carregamento do modulo técnica do express
    // navegacao entre pastas, não sendo necessário
    // realizar require
    var api = app.app.api.grupo;
    // lista de grupos de categoria
    app.get('/v1/grupos', api.lista);
}