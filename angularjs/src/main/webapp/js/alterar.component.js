(function () {
    angular.module('app')
        .component('alterar', {
            bindings: {
                livro: '<'
            },
            templateUrl: 'livro.html',
            controller: function($http,$state){
                var self = this;

                self.submeter = function(){
                    $http.put('api/livro/'+self.livro.id, self.livro).then(function (response) {
                        console.log(response);
                        $state.go('home');
                    });
                }
            }
        })
})();