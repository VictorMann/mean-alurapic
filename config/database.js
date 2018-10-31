var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/alurapic');

// evento connected
mongoose.connection.on('connected', function () {
    console.log('conectado ao mongodb...');
});