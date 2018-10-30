var express = require('express');
var app = express();
var consign = require('consign');

// middleware
app.use(express.static('./public'));

// realiza o carregamento automático dos modulos em app/routes
// passando como param app
consign()
.include('app/api')
.then('app/routes')
.into(app);

module.exports = app;