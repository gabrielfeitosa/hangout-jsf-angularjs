(function () {
    'use strict';

    angular.module('app', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            var states = [
                {
                    name: 'home',
                    url: '/',
                    component: 'home'
                },
                {
                    name: 'adicionar',
                    url: '/livro',
                    component: 'adicionar'
                },
                {
                    name: 'alterar',
                    url: '/livro/{livroId}',
                    component: 'alterar'
                }
            ];

            states.forEach(function (state) {
                $stateProvider.state(state);
            });

            $urlRouterProvider.otherwise('/');

        });

})();