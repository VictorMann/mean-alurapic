// lista de fotos
var fotos = [
    {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
    {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
];

// controller
var api = {};

api.lista = function (req, res) {
    
    res.json(fotos);
};

api.buscaPorId = function (req, res) {

    var foto = fotos.find(fotoBuscada => fotoBuscada._id == req.params.id);
    res.json(foto);
};

api.removePorId = function (req, res) {
    fotos = fotos.filter(foto => foto._id != req.params.id);
    // 204 indica que o servidor executou a operação, mas nenhum informação foi retornada
    res.sendStatus(204); // idem res.status(204).send();
};

module.exports = api;