(function() {

    angular.module('openGameApp', [])

      .controller('UserCtrl', ['$scope', function($scope) {
      
       $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: 'images/logo.png' }]
       $scope.impressoesExemploUm = [{id: 'model1' , nome:'Estrela Ninja', descricao:'Fazemos da cor e o modelo desejado.', imagemUrl: 'images/model1.jpg' }]
       $scope.impressoesExemploDois = [{id: 'model2' , nome:'Capas de Celulares', descricao:'Informe o modelo de seu telefone, cor e desenho.', imagemUrl: 'images/model2.jpg' }]
       $scope.impressoesExemploTres = [{id: 'model3' , nome:'Canecas', descricao:'Fazemos diversas canecas e copos de todos os gostos.', imagemUrl: 'images/model3.jpg' }]
       $scope.impressoesExemploQuatro = [{id: 'model4' , nome:'Tipos de Dados', descricao:'Com muito estilo e design, sempre com qualidade.', imagemUrl: 'images/model4.jpg' }]

       $scope.socioUm = [{id: 'socio1' , nome:'Fabrício Tarden', descricao:'Desenvolvedor', imagemUrl: 'images/socio1.png' }]
       $scope.socioDois = [{id: 'socio2' , nome:'Gabriel Guimarães', descricao:'SCRUM Master', imagemUrl: 'images/socio2.png' }]
       $scope.socioTres = [{id: 'socio3' , nome:'Guilherme Meyrelles', descricao:'Designer', imagemUrl: 'images/socio3.png' }]

       $scope.autenticaAdm = function(){

          usuarioAdm = "admin"
          senhaAdm = "admin"

          if(usuarioAdm === $scope.usuario && senhaAdm === $scope.senha){

            window.location="indexLogado.html"

          }else{

            $scope.resultadoInfo = "Usuário ou Senha errado. Tente novamente!"

          }

       }

       
    }]);

  })();
