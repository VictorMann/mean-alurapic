var api = require('../api/grupo');

module.exports = function (app) {
     // lista de grupos de categoria
     app.get('/v1/grupos', api.lista);
}