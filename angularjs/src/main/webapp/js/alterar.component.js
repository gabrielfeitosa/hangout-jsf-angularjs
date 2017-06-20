(function () {
    angular.module('app')
        .component('alterar', {
            templateUrl: 'livro.html',
            controller: function ($http, $state, $stateParams) {
                var self = this;

                $http.get('api/livro/' + $stateParams.livroId).then(function (response) {
                    self.livro = response.data;
                });

                self.submeter = function () {
                    $http.put('api/livro/' + self.livro.id, self.livro).then(function (response) {
                        console.log(response);
                        $state.go('home');
                    });
                }
            }
        })
})();