angular.module('app').controller( 'loginCtrl', ['$scope', '$state', '$firebaseAuth', function($scope, $state, $firebaseAuth) {

	$scope.auth = $firebaseAuth();
	$scope.mensagem = "";

	$scope.login = function (){
		$scope.auth.$signInWithEmailAndPassword($scope.email, $scope.senha)
		.then(function(firebaseUser){
			console.log('firebase: ', firebaseUser)
			$state.go('home')

		}).catch(function(error){

			console.log(error)

			$scope.mensagem = "Usuário ou senha errado. Tente novamente!";
			$scope.erroMensagem = "[Erro 400 - Dados Incorretos]";

		})

	}
	
}]);