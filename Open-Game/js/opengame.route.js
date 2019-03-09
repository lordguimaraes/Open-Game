angular.module('app').config(function ($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "view/home.html",
		controller: "homeCtrl"
	});
	$routeProvider.when("/login", {
		templateUrl: "view/login.html",
		controller: "loginCtrl"
		
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