angular.module('app').controller('pedidoCtrl', ['$scope','$firebaseStorage', '$firebaseAuth', function($scope, $firebaseStorage, $firebaseAuth) {

    $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: './images/logo.png' }]

    var uploadBar = document.getElementById("uploadBar");
    $scope.fileList = null;
    
    $scope.selectFile = function(file){

    	$scope.fileList = file;
    	console.log($scope.fileList);
    }

    $scope.uploadFile = function(usuarioLogado){
	       
        //Coloquei o '_' como escape para relacionar com o usuário que enviou o pedido   
    	var storageRef = firebase.storage().ref('pedidos/' + usuarioLogado + '_' + $scope.fileList.name);
    	var storage = $firebaseStorage(storageRef);
	
    	var uploadTarefa = storage.$put($scope.fileList)

    	uploadTarefa.$progress(function(snapshot){
    		var porcentagemUpload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    		$scope.porcentagem = porcentagemUpload.toFixed(0);
    		uploadBar.style.width = $scope.porcentagem + '%';

    	});

    	uploadTarefa.$complete(function(snapshot){
    		console.log('Upload Completado');
    	})

    }; 

    $scope.enviar = function(){

    	var authObj = $firebaseAuth();
        
    	authObj.$onAuthStateChanged(function(firebaseUser) {
	  	
	  	$scope.firebaseUser = firebaseUser;
	
	  	$scope.userName = firebaseUser  && firebaseUser.email ?  firebaseUser.email.split('@')[0] : '';

        var nome = $scope.nome;
        var sobrenome = $scope.sobrenome;
        var email = $scope.email;
        var telefone = $scope.telefone;
        var cep = $scope.cep;
        var cidade = $scope.cidade;
        var rua = $scope.rua;
        var complemento = $scope.complemento;

        $scope.uploadFile($scope.userName);

	});

    }

}]);