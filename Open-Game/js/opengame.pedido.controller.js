angular.module('app').controller('pedidoCtrl', ['$scope','$firebaseStorage', '$firebaseAuth','$firebaseArray', '$state', '$window', function($scope, $firebaseStorage, $firebaseAuth, $firebaseArray, $state, $window) {

    $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: './images/logo.png' }]
    var numPedido = 0;
    var urlImagem = '';
    var nomeDaImagem = '';
    var status = "Em atendimento";

    var uploadBar = document.getElementById("uploadBar");
    $scope.fileList = null;
    
    $scope.selectFile = function(file){

    	$scope.fileList = file;
    
    }

    $scope.uploadFile = function(numPedido, usuarioLogado, nome,sobrenome, email, telefone, cep, rua, complemento, observacoes){
	    
        //Coloquei o '_' como escape para relacionar com o usuário que enviou o pedido   
    	var storageRef = firebase.storage().ref('Pedidos/' + $scope.fileList.name);
    	var storage = $firebaseStorage(storageRef);
	
    	var uploadTarefa = storage.$put($scope.fileList)

    	uploadTarefa.$progress(function(snapshot){
    		var porcentagemUpload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    		$scope.porcentagem = porcentagemUpload.toFixed(0);
    		uploadBar.style.width = $scope.porcentagem + '%';

    	});

    	uploadTarefa.$complete(function(snapshot){
    		console.log('Upload Completado');

         var starsRef = storageRef.child('Pedidos/' + $scope.fileList.name);
         $scope.storage = $firebaseStorage(storageRef);

         nomeDaImagem = $scope.fileList.name

           $scope.storage.$getDownloadURL().then(function(url) {

            urlImagem = url;
            var preco = 'R$ 20,00'

            var usuario = {numPedidoUsuario: numPedido, statusPedido: status, usuarioSolicitante: usuarioLogado, nomeUsuario: nome, sobrenomeUsuario: sobrenome, emailUsuario: email, telefoneUsuario: telefone, cepUsuario: cep, ruaUsuario: rua, complementoUsuario: complemento, observacoesUsuario: observacoes, imagemUrl: urlImagem, imagemNome: nomeDaImagem, precoImpressao: preco};

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

        
    	});
     
    }; 

    $scope.enviar = function(){

    	$scope.obj = $firebaseAuth();

        var usuarioSistema = $scope.obj.$getAuth();

        $scope.logado =  usuarioSistema  && usuarioSistema.email ?  usuarioSistema.email.split('@')[0] : ''; 

        var userName = $scope.logado;
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

    }

}]);