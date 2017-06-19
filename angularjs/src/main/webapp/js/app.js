(function () {
    'use strict';

    angular.module('app', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            var states = [
                {
                    name: 'home',
                    url: '/',
                    component: 'home',
                    resolve: {
                        livros: function ($http) {
                            return $http.get('api/livro').then(function (response) {
                                return response.data;
                            });
                        }
                    }
                },
                {
                    name: 'adicionar',
                    url: '/livro',
                    component: 'adicionar'
                },
                {
                    name: 'alterar',
                    url: '/livro/{livroId}',
                    component: 'alterar',
                    resolve: {
                        livro: function ($http, $transition$) {
                            return $http.get('api/livro/' + $transition$.params().livroId).then(function (response) {
                                return response.data;
                            });
                        }
                    }
                }
            ];

            states.forEach(function (state) {
                $stateProvider.state(state);
            });

            $urlRouterProvider.otherwise('/');

        });

})();