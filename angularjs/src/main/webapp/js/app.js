(function () {
    'use strict';

    angular.module('app', ['ngRoute'])
        .config(function($routeProvider,$locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl : "lista.html",
                    controller: 'LivroController'
                })
                .when("/livro/:id", {
                    templateUrl : "livro.html",
                    controller: 'LivroController'
                });
        })
        .controller('LivroController', function ($scope, $http, $location, $routeParams) {

            $scope.livro = {};

            if($routeParams.id){
                $http.get('api/livro/'+$routeParams.id).then(function (response) {
                    $scope.livro = response.data;
                });
            }else{
                $http.get('api/livro').then(function (response) {
                    $scope.livros = response.data;
                });
            }

            $scope.submeter = function(){
                if($scope.livro.id){
                    $http.put('api/livro/'+$scope.livro.id, $scope.livro).then(function (response) {
                        console.log(response);
                        $location.path( "/" );
                    });
                }else{
                    $http.post('api/livro', $scope.livro).then(function (response) {
                        console.log(response);
                        $location.path( "/" );
                    });
                }
            }

            // $scope.save = function () {
            //     $http.post('api/user', $scope.user).then(function (response) {
            //         $scope.users.push(response.data);
            //     });
            //
            //     $scope.user = {username: '', password: ''};
            //     $scope.statusPassword = {};
            // };
            //
            // $scope.passwordValidate = function () {
            //     $scope.statusPassword = {};
            //
            //     if ($scope.user.password && $scope.user.password.length >= 6) {
            //         $scope.statusPassword.cssClass = 'has-success';
            //         $scope.statusPassword.icon = 'glyphicon-ok';
            //         $scope.statusPassword.msg = 'Senha forte';
            //     }else {
            //         $scope.statusPassword.cssClass = 'has-error';
            //         $scope.statusPassword.icon = 'glyphicon-remove';
            //         $scope.statusPassword.msg = 'Senha fraca';
            //     }
            // };
        });

})();