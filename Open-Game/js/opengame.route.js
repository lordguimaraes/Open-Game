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

      "currentAuth": ["Auth", function(Auth) {
        
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
	$urlRouterProvider.otherwise('/');

});

angular.module('app').factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);