angular.module('app').controller('meuPedidoCtrl', ['$scope','$firebaseStorage', '$firebaseAuth','$firebaseArray', 'Auth', function($scope, $firebaseStorage, $firebaseAuth, $firebaseArray, Auth) {

    $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: './images/logo.png' }]
    $scope.status = "Em atendimento";

    $scope.obj = $firebaseAuth();

    var usuarioSistema = $scope.obj.$getAuth();

    $scope.logado =  usuarioSistema  && usuarioSistema.email ?  usuarioSistema.email.split('@')[0] : ''; 
    
       var referencia = firebase.database().ref('Prints');
       var listaPedidos = $firebaseArray(referencia);

       $scope.list = listaPedidos;

}]);