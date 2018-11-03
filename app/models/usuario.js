var mongoose = require('mongoose');

// esquema do mongoose
var schema = mongoose.Schema({
    login: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true
    }
});

mongoose.model('Usuario', schema);