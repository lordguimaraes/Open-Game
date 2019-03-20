angular.module('app').controller( 'menuCtrl', ['$scope', '$state', '$firebaseAuth', 'Auth', function($scope, $state, $firebaseAuth, Auth) {

	let authObj = $firebaseAuth();

	$scope.auth = Auth;

	authObj.$onAuthStateChanged(function(firebaseUser) {
	  	
	  	$scope.firebaseUser = firebaseUser;
	
	  	$scope.userName = firebaseUser  && firebaseUser.email ?  firebaseUser.email.split('@')[0] : '';

	});


		
}]);