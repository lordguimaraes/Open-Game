angular.module('app').controller( 'cadastroCtrl', ['$scope', '$state', '$firebaseAuth','$window', function($scope, $state, $firebaseAuth, $window) {

	 $scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: './images/logo.png' }]

	 $scope.authObj = $firebaseAuth();
	 $scope.email = '';
	 $scope.senha = '';

	 function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}

	 async function dormirSegundos() {
  		
 	 await sleep(3000);
 		
	}

	$scope.cadastrar = function(){

		console.log($scope.email)

		$scope.authObj.$createUserWithEmailAndPassword($scope.email, $scope.senha)
  		.then(function(firebaseUser) {

  		  $scope.authObj.$signOut();

  		  dormirSegundos();

  		  $window.alert('== Usuário cadastrado com sucesso! Faça seu login! ==');

  		  dormirSegundos();
  
  		  $state.go('home');

  		  var emailDestino = $scope.email;
		  console.log(emailDestino);

			// Email.send({
			    
			//     SecureToken : "",
			//     To : emailDestino,
			//     From : "fabricio.tarden@al.infnet.edu.br",
			//     Subject : "OPEN GAME - Impressões 3D - Cadastro",
			//     Body : "Parabéns! Seu cadastro foi realizado com sucesso."

		 //  }).then(
			//   message => console.log(message)
		 //  );
  		  
 		  }).catch(function(error) {
  		  console.error("Error: ", error);
 		  });


	}

}]);