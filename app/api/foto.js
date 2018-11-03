var mongoose = require('mongoose');
// controller
var api = {};

api.lista = function (req, res) {
    
    var model = mongoose.model('Foto');
    
    model.find({}).then(
        fotos => res.json(fotos),
        erro => {
            console.log(erro);
            res.status(500).json(erro);
        }
    );
    /* outra opção
    model.find((erro, fotos) => {
        if (erro) res.status(500).json(erro);
        res.json(fotos);
    });
    */

};

api.buscaPorId = function (req, res) {

    
};

api.removePorId = function (req, res) {
    
    // 204 indica que o servidor executou a operação, mas nenhum informação foi retornada
    
};

api.adiciona = function (req, res) {

};

api.atualiza = function (req, res) {

};

module.exports = api;