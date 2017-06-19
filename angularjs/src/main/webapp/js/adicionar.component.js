(function () {
    angular.module('app')
        .component('adicionar', {
            templateUrl: 'livro.html',
            controller: function($http,$state){
                var self = this;
                self.livro = {};

                self.submeter = function(){
                    $http.post('api/livro', self.livro).then(function (response) {
                        console.log(response);
                        $state.go('home');
                    });
                }
            }
        })
})();