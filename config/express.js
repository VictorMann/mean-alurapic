var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

// variáveis de ambiente
app.set('secret', 'homemavestruz');

// middleware
app.use(express.static('./public'));
app.use(bodyParser.json());

// realiza o carregamento automático dos modulos em app/routes
// passando como param app
consign()
.include('app/models')
.then('app/api')
.then('app/routes/auth')
.then('app/routes')
.into(app);

module.exports = app;