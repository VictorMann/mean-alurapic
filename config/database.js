module.exports = function (uri) {

    var mongoose = require('mongoose');
    
    mongoose.connect(`mongodb://${uri}`);
    
    // evento conectado
    mongoose.connection.on('connected', function () {
        console.log('conectado ao mongodb...');
    });
    
    // evento erro
    // é necessário, pois caso haja um erro de conexao o mongoose
    // derruba toda a app, definido o evento isso é evitado, mesmo q não haja uma conexao
    mongoose.connection.on('error', function (erro) {
        console.log(`erro na conexao: ${erro}`);
    });
    
    // evento disconectado
    mongoose.connection.on('disconnected', function () {
        console.log('desconectado do mongodb');
    });
    
    // o node cria esta objeto implicitamente, que monitora a execução da aplicação
    // nesse caso, o evento definido SIGINT, ref ao fechamento da app com Ctrl + C
    process.on('SIGINT', function () {
        // fecha a conexao do mongodb
        mongoose.connection.close(function () {
            console.log('conexao fechada pelo termino da aplicacao');
            // define que foi um tipo esperado
            process.exit(0);
        });
    });
}