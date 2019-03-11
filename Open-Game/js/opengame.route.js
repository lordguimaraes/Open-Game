angular.module('app').config(function ($stateProvider, $urlRouterProvider){
	$stateProvider.state("home", {
		url: '/',
		templateUrl: "view/home.html",
		controller: "homeCtrl"
	});
	$stateProvider.state("login", {
		url: '/login',
		templateUrl: "view/login.html",
		controller: "loginCtrl"
		
	});
	$stateProvider.state("pedido", {
		url: '/pedido',
		templateUrl: "view/pedido.html",
		controller: "pedidoCtrl",
		resolve: {
      // controller will not be loaded until $requireSignIn resolves
      // Auth refers to our $firebaseAuth wrapper in the factory below
      "currentAuth": ["Auth", function(Auth) {
        // $requireSignIn returns a promise so the resolve waits for it to complete
        // If the promise is rejected, it will throw a $routeChangeError (see above)
        
        return Auth.$requireSignIn();
        

      }]
    }
		
	});
	$stateProvider.state("cadastro", {
		url: '/cadastro',
		templateUrl: "view/cadastro.html",
		controller: "cadastroCtrl"
		
	});
	$stateProvider.state("empresa", {
		url: '/empresa',
		templateUrl: "view/empresa.html",
		controller: "empresaCtrl"
		
	});
	$urlRouterProvider.otherwise('/')
	

});

// angular.module('app').run(["$rootScope", "$location", function($rootScope, $location) {
//   $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
//     // We can catch the error thrown when the $requireSignIn promise is rejected
//     // and redirect the user back to the home page
//     if (error === "AUTH_REQUIRED") {
//       $location.path("/login");
//     }
//   });
// }]);

angular.module('app').run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    console.log('aqui')
    if (error === "AUTH_REQUIRED") {
      $state.go("/login");
    }
  });
}]);

angular.module('app').factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);