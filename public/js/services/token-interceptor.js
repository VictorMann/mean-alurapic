angular.module('alurapic').factory('tokenInterceptor', function ($window, $q) {

    var interceptor = {};

    interceptor.response = function (response) {
        var token = response.headers('x-access-token');
        if (token) $window.sessionStorage.setItem('token', token);
        return response;
    };

    interceptor.request = function (config) {
        config.headers = config.headers || {};
        config.headers['x-access-token'] = $window.sessionStorage.getItem('token');
        return config;
    };

    interceptor.responseError = function (rejection) {
        if (rejection != null && rejection.status == 401) {
            $window.sessionStorage.removeItem('token');
            $location.path('/login');
        }

        return $q.reject(rejection);
    };

    return interceptor;
});