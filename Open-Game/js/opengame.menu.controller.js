angular.module('app').controller( 'menuCtrl', ['$scope', '$state', '$firebaseAuth', 'Auth', function($scope, $state, $firebaseAuth, Auth) {

	var authObj = $firebaseAuth();
	$scope.auth = Auth;

	authObj.$onAuthStateChanged(function(firebaseUser) {
	  	
	  	$scope.firebaseUser = firebaseUser;
	  	console.log('fireuser: ', firebaseUser)
	  	$scope.userName = firebaseUser  && firebaseUser.email ?  firebaseUser.email.split('@')[0] : '';

	});
	
		
	
}]);