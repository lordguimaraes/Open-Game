angular.module('app').controller('pedidoCtrl', ['$scope','$firebaseStorage', '$firebaseAuth','$firebaseArray', '$state', '$window', function($scope, $firebaseStorage, $firebaseAuth, $firebaseArray, $state, $window) {

    $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: './images/logo.png' }]
    var numPedido = 0;
    var urlImagem = '';
    var nomeDaImagem = '';

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

        });

        console.log(nomeDaImagem);

         var starsRef = storageRef.child('Pedidos/' + $scope.fileList.name);
         $scope.storage = $firebaseStorage(storageRef);

         nomeDaImagem = $scope.fileList.name

           $scope.storage.$getDownloadURL().then(function(url) {

            urlImagem = url;

            var usuario = {[usuarioLogado] : {numPedidoUsuario: numPedido,usuarioSolicitante: usuarioLogado, nomeUsuario: nome, sobrenomeUsuario: sobrenome, emailUsuario: email, telefoneUsuario: telefone, cepUsuario: cep, ruaUsuario: rua, complementoUsuario: complemento, observacoesUsuario: observacoes, imagemUrl: urlImagem, imagemNome: nomeDaImagem}};

            console.log(usuario);

            var ref = firebase.database().ref('Prints');
            var urls = $firebaseArray(ref);
            var id = ref.key;
            
            urls.$add({
               
                    usuario
                   
            }).then(function(ref){
                urls.$indexFor(id);
            });

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

        numPedido = Math.floor(Math.random() * 65536);
        
        $scope.uploadFile(numPedido, userName, nome, sobrenome, email, telefone, cep, rua, complemento, observacoes);
        numPedido++;

     
       
	});

    }

}]);