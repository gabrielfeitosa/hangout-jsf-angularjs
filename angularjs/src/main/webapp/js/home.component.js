(function () {
    angular.module('app')
        .component('home', {
            bindings: {
                livros: '<'
            },
            templateUrl: 'home.html',
            controller: function ($http) {
                var self = this;

                self.excluir = function (index) {
                    $http.delete('api/livro/'+self.livros[index].id).then(function (response) {
                        console.log(response);
                        self.livros.splice(index, 1);
                    })
                }
            }
        })
})();