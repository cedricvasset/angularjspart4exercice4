var app = angular.module('fonction', []);
//declaration de deux fonctions,scope et http
app.controller('marqueCtrl', function($scope ,$http) {
  //$http.get declare ou se trouvent les données a aller chercher.Ne pas oublier de lier le sript à la page html!!!!!!
  $http.get('voiture.json').then(function(json){
    $scope.marques = json.data;
  });
});
