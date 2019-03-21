angular.module('app').controller('pagamentoCtrl', ['$scope','$firebaseStorage', '$firebaseAuth','$firebaseArray', 'Auth', '$state', '$window', function($scope, $firebaseStorage, $firebaseAuth, $firebaseArray, Auth, $state, $window) {

    $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: './images/logo.png' }]
    
    $scope.obj = $firebaseAuth();

    var usuarioSistema = $scope.obj.$getAuth();

    $scope.logado =  usuarioSistema  && usuarioSistema.email ?  usuarioSistema.email.split('@')[0] : ''; 

    var selecionado = $scope.logado;

    var referencia = firebase.database().ref('Prints');
    var listaPedidos = $firebaseArray(referencia);
    
    $scope.aprovarPagamento = function(){

      angular.forEach(listaPedidos, function(key){
        
        if(key.usuario.usuarioSolicitante == selecionado){

            if(key.usuario.chaveUsuario == key.$id){

                var usersRef = referencia.child(key.$id);

                usersRef.update({
            
                    "usuario/statusPedido": "Pagamento Recebido"
                   
                });

                $window.alert("Você receberá a confirmação de pagamento por e-mail!")

                $state.go('home');

                var emailDestino = key.usuario.emailUsuario;

                console.log(emailDestino);

                Email.send({
                    
                    SecureToken : "4d1dd9bc-ad24-488c-9796-365ba36297cb",
                    To : emailDestino,
                    From : "fabricio.tarden@al.infnet.edu.br",
                    Subject : "OPEN GAME - Impressões 3D - Pagamento",
                    Body : "PARABÉNS! Seu pagamento foi confirmado!"

              }).then(
                  message => console.log(message)
              );
              
            }
        }

      });
      
    }


}]);