(function () {
    angular.module('app')
        .component('home', {
            templateUrl: 'home.html',
            controller: function ($http) {
                var self = this;

                $http.get('api/livro').then(function (response) {
                    self.livros = response.data;
                });

                self.excluir = function (index) {
                    $http.delete('api/livro/'+self.livros[index].id).then(function (response) {
                        console.log(response);
                        self.livros.splice(index, 1);
                    })
                }
            }
        })
})();