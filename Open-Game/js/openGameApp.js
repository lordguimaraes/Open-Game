(function() {

    angular.module('openGameApp', [])

      .controller('UserCtrl', ['$scope', function($scope) {
      
       $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: 'img/logo.png' }]
       $scope.impressoesExemploUm = [{id: 'model1' , nome:'Estrela Ninja', descricao:'Fazemos da cor e o modelo desejado.', imagemUrl: 'img/model1.jpg' }]
       $scope.impressoesExemploDois = [{id: 'model2' , nome:'Capas de Celulares', descricao:'Informe o modelo de seu telefone, cor e desenho.', imagemUrl: 'img/model2.jpg' }]
       $scope.impressoesExemploTres = [{id: 'model3' , nome:'Canecas', descricao:'Fazemos diversas canecas e copos de todos os gostos.', imagemUrl: 'img/model3.jpg' }]
       $scope.impressoesExemploQuatro = [{id: 'model4' , nome:'Diversos tipos de Dados', descricao:'Com muito estilo e design, sempre com qualidade.', imagemUrl: 'img/model4.jpg' }]


         
    }]);


  })();