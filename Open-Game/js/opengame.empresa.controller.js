angular.module('app').controller('empresaCtrl', function($scope) {

	$scope.logoMarca = [{id: 'logo' , nome:'logo - open game', descricao:'logo', imagemUrl: './images/logo.png' }]
	$scope.socioUm = [{id: 'socio1' , nome:'Fabrício Tarden', descricao:'Desenvolvedor', imagemUrl: './images/socio1.png' }]
    $scope.socioDois = [{id: 'socio2' , nome:'Gabriel Guimarães', descricao:'SCRUM Master', imagemUrl: './images/socio2.png' }]
    $scope.socioTres = [{id: 'socio3' , nome:'Guilherme Meyrelles', descricao:'Designer', imagemUrl: './images/socio3.png' }]
   
});