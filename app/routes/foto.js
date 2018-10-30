module.exports = function (app) {
    // carregamento do modulo técnica do express
    // navegacao entre pastas, não sendo necessário
    // realizar require
    var api = app.app.api.foto;
    
    app.get('/v1/fotos', api.lista);
}