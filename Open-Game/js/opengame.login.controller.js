angular.module('app').controller('loginCtrl', function($scope, $firebaseAuth) {


	var auth = $firebaseAuth();
	
	$scope.login = function (){
		auth.$signInWithEmailAndPassword($scope.email, $scope.senha)
		.then(function(firebaseUser){
			console.log(firebaseUser)

		}).catch(function(error){
			console.log(error)
		})

	auth.$onAuthStateChanged(function(firebaseUser) {
	  	
	  	$scope.firebaseUser = firebaseUser;

	});


	}

	
	
});