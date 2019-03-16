angular.module('app').controller('pedidoCtrl', ['$scope','$firebaseStorage', '$firebaseAuth','$firebaseArray', function($scope, $firebaseStorage, $firebaseAuth, $firebaseArray) {

    $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: './images/logo.png' }]

    var uploadBar = document.getElementById("uploadBar");
    $scope.fileList = null;
    
    $scope.selectFile = function(file){

    	$scope.fileList = file;
    	console.log($scope.fileList);
    }

    $scope.uploadFile = function(numPedido, usuarioLogado, nome,sobrenome, email, telefone, cep, rua, complemento, observacoes){
	    
        console.log(complemento);

        //Coloquei o '_' como escape para relacionar com o usuário que enviou o pedido   
    	var storageRef = firebase.storage().ref('Pedidos/' + usuarioLogado + '_' + $scope.fileList.name);
    	var storage = $firebaseStorage(storageRef);
	
    	var uploadTarefa = storage.$put($scope.fileList)

    	uploadTarefa.$progress(function(snapshot){
    		var porcentagemUpload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    		$scope.porcentagem = porcentagemUpload.toFixed(0);
    		uploadBar.style.width = $scope.porcentagem + '%';

    	});

    	uploadTarefa.$complete(function(snapshot){
    		console.log('Upload Completado');

            console.log(snapshot);

            //var imageUrl = snapshot.downloadURL;
            // var imageUrl = snapshot.ref.getDownloadURL()
            // var imageUrl = uploadTarefa.snapshot.downloadURL;
            var imageName = snapshot.metadata.name;

            var usuario = {[usuarioLogado] : {numPedidoUsuario: numPedido, nomeUsuario: nome, sobrenomeUsuario: sobrenome, emailUsuario: email, telefoneUsuario: telefone, cepUsuario: cep, ruaUsuario: rua, complementoUsuario: complemento, observacoesUsuario: observacoes, imagagemUsuario:imageName}};

            console.log(usuario);

            var starsRef = storageRef.child('Pedidos/' + $scope.fileList.name);
           
            var ref = firebase.database().ref('Prints');
            var urls = $firebaseArray(ref);
            var id = ref.key;
            
            urls.$add({
               
                    usuario
                   
            }).then(function(ref){
                urls.$indexFor(id);
            });

            numPedido+=1;

            uploadTarefa.$error(function(error){
                console.log(error)
            });

    	});

    }; 

    $scope.enviar = function(){

    	var authObj = $firebaseAuth();
        
    	authObj.$onAuthStateChanged(function(firebaseUser) {
	  	
	  	$scope.firebaseUser = firebaseUser;
	
	  	$scope.userName = firebaseUser  && firebaseUser.email ?  firebaseUser.email.split('@')[0] : '';

        var userName = $scope.userName;
        var nome = $scope.nome;
        var sobrenome = $scope.sobrenome;
        var email = $scope.email;
        var telefone = $scope.telefone;
        
        var cep = $scope.cep;
        var rua = $scope.rua;
        var complemento = $scope.complemento;
        var observacoes = $scope.observacoes;
        
        $scope.numPedido = 0;


        $scope.uploadFile(numPedido, userName, nome, sobrenome, email, telefone, cep, rua, complemento, observacoes);

	});

    }

}]);