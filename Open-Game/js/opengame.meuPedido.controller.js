angular.module('app').controller('meuPedidoCtrl', ['$scope','$firebaseStorage', '$firebaseAuth','$firebaseArray', 'Auth', function($scope, $firebaseStorage, $firebaseAuth, $firebaseArray, Auth) {

    $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: './images/logo.png' }]
    $scope.status = "Em atendimento";

    var authObj = $firebaseAuth();
    
    $scope.auth = Auth;

    authObj.$onAuthStateChanged(function(firebaseUser) {
        
        $scope.firebaseUser = firebaseUser;
    
        $scope.usuarioLogado = firebaseUser  && firebaseUser.email ?  firebaseUser.email.split('@')[0] : '';

        console.log($scope.usuarioLogado);

    });

    console.log($scope.usuarioLogado);

       var ref = firebase.database().ref('Prints');
       var list = $firebaseArray(ref);

       $scope.list = list;

       console.log(list);

}]);