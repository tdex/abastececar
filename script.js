var app = angular.module('myApp', []);
app.controller('app', function ($scope) {
  var vm = $scope;

  vm.precoGasolina = 0;
  vm.consumoCarro = 0;
  vm.distanciaViagem = 0;

  vm.calcularValorViagem = function () {
    var litrosNecessarios = vm.distanciaViagem / vm.consumoCarro;

    vm.valorViagem = vm.precoGasolina * litrosNecessarios;
  };
});
