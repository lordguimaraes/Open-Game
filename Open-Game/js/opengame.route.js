angular.module('app').config(function ($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "view/home.html",
		controller: "homeCtrl"
	});
	$routeProvider.when("/login", {
		templateUrl: "view/login.html",
		controller: "loginCtrl"
		
	});
	$routeProvider.when("/pedido", {
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
	$routeProvider.when("/cadastro", {
		templateUrl: "view/cadastro.html",
		controller: "cadastroCtrl"
		
	});
	$routeProvider.when("/empresa", {
		templateUrl: "view/empresa.html",
		controller: "empresaCtrl"
		
	});
	$routeProvider.otherwise({
	controller : function(){
       window.location.replace('view/naoencontrada.html');
    }, 
    template : "<div></div>"
	});

});

angular.module('app').run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

angular.module('app').factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);