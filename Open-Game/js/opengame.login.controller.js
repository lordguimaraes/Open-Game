angular.module('app').controller( 'loginCtrl', ['$scope', '$state', '$firebaseAuth', function($scope, $state, $firebaseAuth) {

   console.log('firebase: ', $firebaseAuth)
   console.log('$state: ', $state)
	var auth = $firebaseAuth();
	
	$scope.login = function (){
		auth.$signInWithEmailAndPassword($scope.email, $scope.senha)
		.then(function(firebaseUser){
			console.log('firebase: ', firebaseUser)
			$state.go('home')

		}).catch(function(error){
			console.log(error)
		})

	}

	
}]);