angular.module('alurapic').controller('LoginController', function ($scope, $http, $location) {

    $scope.usuario = {};
    $scope.mensagem = '';

    $scope.autenticar = function () {
        
        var usuario = $scope.usuario;
        
        $http.post('/autenticar', {
            login: usuario.login, 
            senha: usuario.senha
        })
        .then(
            () => $location.path('/'),
            erro => {
                console.log(erro);
                $scope.usuario = {};
                $scope.mensagem = 'Login ou senha inválidos';
            }
        );
    };

});