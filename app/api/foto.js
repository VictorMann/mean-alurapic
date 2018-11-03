var mongoose = require('mongoose');
// controller
var api = {};
var model = mongoose.model('Foto');

api.lista = function (req, res) {

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

    model.findById(req.params.id).then(
        foto => {
            if (!foto) throw Error('Foto nao encontrada');
            res.json(foto);
        },
        erro => {
            console.log(erro);
            res.status(404).json(erro);
        }
    );
};

api.removePorId = function (req, res) {
    
    model.remove({_id: req.params.id}).then(
        // 204 indica que o servidor executou a operação, mas nenhum informação foi retornada
        () => res.sendStatus(204),
        erro => {
            console.log(erro);
            res.status(500).json(erro);
        }
    );
};

api.adiciona = function (req, res) {

    model.create(req.body).then(
        // devolve a foto com _id
        foto => res.json(foto),
        erro => {
            console.log(erro);
            res.status(500).json(erro);
        }
    );
};

api.atualiza = function (req, res) {

    model.findByIdAndUpdate(req.params.id, req.body).then(
        foto => res.json(foto),
        erro => {
            console.log(erro);
            res.status(500).json(erro);
        }
    );
};

module.exports = api;